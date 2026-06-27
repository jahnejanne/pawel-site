"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AutomationFlowHero() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0.2, 6.4);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.rotation.x = -0.08;
    scene.add(group);

    const processor = createProcessor();
    const inputCard = createGlassCard(
      "Request",
      "Email received",
      -2.25,
      0.35,
      0xa78bfa,
    );
    const outputCard = createGlassCard(
      "Done",
      "CRM + reply ready",
      2.25,
      -0.3,
      0x67e8f9,
    );

    group.add(processor, inputCard, outputCard);

    const inputPath = createLine(
      new THREE.Vector3(-1.62, 0.35, 0),
      new THREE.Vector3(-0.68, 0.06, 0),
      0xa78bfa,
    );

    const outputPath = createLine(
      new THREE.Vector3(0.68, -0.04, 0),
      new THREE.Vector3(1.62, -0.3, 0),
      0x67e8f9,
    );

    group.add(inputPath, outputPath);

    const packets = [
      createPacket(0xa78bfa),
      createPacket(0x67e8f9),
      createPacket(0x38bdf8),
    ];

    packets.forEach((packet) => group.add(packet));

    scene.add(new THREE.AmbientLight(0xffffff, 1.7));

    const keyLight = new THREE.PointLight(0xffffff, 4.2, 9);
    keyLight.position.set(0, 2.7, 4);
    scene.add(keyLight);

    const violetLight = new THREE.PointLight(0x8b5cf6, 7, 8);
    violetLight.position.set(-2.4, 1.4, 3);
    scene.add(violetLight);

    const cyanLight = new THREE.PointLight(0x22d3ee, 7, 8);
    cyanLight.position.set(2.4, -1.4, 3);
    scene.add(cyanLight);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    let frameId = 0;
    let time = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.01;

      group.rotation.y = Math.sin(time * 0.24) * 0.055;

      processor.rotation.y += 0.003;
      processor.rotation.x = Math.sin(time * 0.45) * 0.025;
      processor.scale.setScalar(1 + Math.sin(time * 1.8) * 0.018);

      inputCard.position.z = Math.sin(time * 1.2) * 0.035;
      outputCard.position.z = Math.sin(time * 1.2 + 1.4) * 0.035;

      const cycle = (time * 0.18) % 1;

      setPacketPosition(
        packets[0],
        cycle,
        new THREE.Vector3(-1.62, 0.35, 0.06),
        new THREE.Vector3(0, 0.02, 0.14),
      );

      setPacketPosition(
        packets[1],
        (cycle + 0.38) % 1,
        new THREE.Vector3(0, -0.02, 0.14),
        new THREE.Vector3(1.62, -0.3, 0.06),
      );

      setPacketPosition(
        packets[2],
        (cycle + 0.55) % 1,
        new THREE.Vector3(0, 0.02, 0.14),
        new THREE.Vector3(1.62, -0.3, 0.06),
      );

      renderer.render(scene, camera);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);

      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }

      disposeObject(processor);
      disposeObject(inputCard);
      disposeObject(outputCard);
      packets.forEach(disposeObject);

      [inputPath, outputPath].forEach((line) => {
        line.geometry.dispose();

        if (Array.isArray(line.material)) {
          line.material.forEach((material) => material.dispose());
        } else {
          line.material.dispose();
        }
      });

      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="h-full w-full" />;
}

function createProcessor() {
  const group = new THREE.Group();

  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(0.95, 1.08, 0.28, 96),
    new THREE.MeshPhysicalMaterial({
      color: 0xf8f7ff,
      roughness: 0.18,
      metalness: 0.45,
      transmission: 0.08,
      thickness: 0.45,
      emissive: 0x3b0764,
      emissiveIntensity: 0.14,
    }),
  );

  base.rotation.x = Math.PI / 2;

  const crystal = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.52, 5),
    new THREE.MeshPhysicalMaterial({
      color: 0xf5f3ff,
      roughness: 0.07,
      metalness: 0.32,
      transmission: 0.25,
      thickness: 0.65,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.55,
    }),
  );

  crystal.position.z = 0.08;

  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(1.18, 64, 64),
    new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.055,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );

  const cyanGlow = new THREE.Mesh(
    new THREE.SphereGeometry(0.82, 64, 64),
    new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.035,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );

  const orbitA = createOrbit(0.92, 0xffffff, 0.2);
  orbitA.rotation.x = Math.PI / 2.2;
  orbitA.rotation.y = 0.35;

  const orbitB = createOrbit(1.12, 0x8b5cf6, 0.24);
  orbitB.rotation.x = Math.PI / 2.55;
  orbitB.rotation.y = -0.5;

  const lightDot = new THREE.Mesh(
    new THREE.SphereGeometry(0.045, 24, 24),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
    }),
  );

  lightDot.position.set(-0.2, 0.18, 0.5);

  group.add(glow, cyanGlow, base, crystal, orbitA, orbitB, lightDot);

  return group;
}

function createOrbit(radius: number, color: number, opacity: number) {
  return new THREE.Mesh(
    new THREE.TorusGeometry(radius, 0.006, 12, 160),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
  );
}

function createGlassCard(
  title: string,
  detail: string,
  x: number,
  y: number,
  color: number,
) {
  const group = new THREE.Group();
  group.position.set(x, y, 0);

  const texture = createCardTexture(title, detail, color);

  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(1.48, 0.8),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.075,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
  );

  const face = new THREE.Mesh(
    new THREE.PlaneGeometry(1.22, 0.58),
    new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
    }),
  );

  group.add(glow, face);

  return group;
}

function createCardTexture(title: string, detail: string, color: number) {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 384;

  const context = canvas.getContext("2d");
  if (!context) return new THREE.CanvasTexture(canvas);

  const accent = `#${color.toString(16).padStart(6, "0")}`;

  context.clearRect(0, 0, canvas.width, canvas.height);

  const gradient = context.createLinearGradient(
    0,
    0,
    canvas.width,
    canvas.height,
  );
  gradient.addColorStop(0, "rgba(255,255,255,0.22)");
  gradient.addColorStop(0.55, "rgba(255,255,255,0.1)");
  gradient.addColorStop(1, "rgba(255,255,255,0.035)");

  roundRect(context, 34, 42, 700, 300, 78);
  context.fillStyle = gradient;
  context.fill();

  context.strokeStyle = "rgba(255,255,255,0.28)";
  context.lineWidth = 4;
  context.stroke();

  context.shadowColor = accent;
  context.shadowBlur = 32;
  context.fillStyle = accent;
  context.beginPath();
  context.arc(126, 192, 24, 0, Math.PI * 2);
  context.fill();
  context.shadowBlur = 0;

  context.font = "700 58px Inter, Arial, sans-serif";
  context.fillStyle = "rgba(255,255,255,0.97)";
  context.fillText(title, 178, 188);

  context.font = "500 26px Inter, Arial, sans-serif";
  context.fillStyle = "rgba(255,255,255,0.54)";
  context.fillText(detail, 178, 246);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;

  return texture;
}

function createLine(start: THREE.Vector3, end: THREE.Vector3, color: number) {
  const curve = new THREE.QuadraticBezierCurve3(
    start,
    new THREE.Vector3((start.x + end.x) / 2, (start.y + end.y) / 2, 0.22),
    end,
  );

  const geometry = new THREE.BufferGeometry().setFromPoints(
    curve.getPoints(72),
  );

  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity: 0.24,
    blending: THREE.AdditiveBlending,
  });

  return new THREE.Line(geometry, material);
}

function createPacket(color: number) {
  const group = new THREE.Group();

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.06, 24, 24),
    new THREE.MeshBasicMaterial({
      color,
    }),
  );

  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 32, 32),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );

  group.add(glow, core);

  return group;
}

function setPacketPosition(
  packet: THREE.Object3D,
  progress: number,
  start: THREE.Vector3,
  end: THREE.Vector3,
) {
  const eased = easeInOut(progress);

  packet.position.set(
    lerp(start.x, end.x, eased),
    lerp(start.y, end.y, eased),
    Math.sin(progress * Math.PI) * 0.2,
  );

  packet.scale.setScalar(0.82 + Math.sin(progress * Math.PI) * 0.75);
  packet.visible = progress > 0.04 && progress < 0.96;
}

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

function easeInOut(value: number) {
  return value * value * (3 - 2 * value);
}

function roundRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius,
    y + height,
  );
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.geometry.dispose();

      if (Array.isArray(child.material)) {
        child.material.forEach(disposeMaterial);
      } else {
        disposeMaterial(child.material);
      }
    }
  });
}

function disposeMaterial(material: THREE.Material) {
  if ("map" in material && material.map) {
    material.map.dispose();
  }

  material.dispose();
}
