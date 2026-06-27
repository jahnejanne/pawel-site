"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type FlowNode = {
  title: string;
  detail: string;
  x: number;
  y: number;
  color: number;
};

const inputNodes: FlowNode[] = [
  { title: "Email", detail: "New lead", x: -2.65, y: 0.92, color: 0xa78bfa },
  { title: "PDF", detail: "Document", x: -2.9, y: 0.02, color: 0x818cf8 },
  { title: "Form", detail: "Request", x: -2.55, y: -0.86, color: 0xc084fc },
];

const outputNodes: FlowNode[] = [
  { title: "CRM", detail: "Updated", x: 2.65, y: 0.92, color: 0x67e8f9 },
  { title: "Reply", detail: "Ready", x: 2.9, y: 0.02, color: 0x38bdf8 },
  { title: "Report", detail: "Done", x: 2.55, y: -0.86, color: 0x22d3ee },
];

type MaterialWithMap = THREE.Material & {
  map?: THREE.Texture | null;
};

export default function AutomationFlowHero() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 100);
    camera.position.set(0, 0.08, 6.65);

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
    group.add(processor);

    const inputCards = inputNodes.map(createGlassCard);
    const outputCards = outputNodes.map(createGlassCard);
    [...inputCards, ...outputCards].forEach((card) => group.add(card));

    const lines: THREE.Line[] = [];

    inputNodes.forEach((node) => {
      const line = createLine(
        new THREE.Vector3(node.x + 0.58, node.y, 0),
        new THREE.Vector3(-0.72, node.y * 0.25, 0.05),
        node.color,
      );
      lines.push(line);
      group.add(line);
    });

    outputNodes.forEach((node) => {
      const line = createLine(
        new THREE.Vector3(0.72, node.y * 0.25, 0.05),
        new THREE.Vector3(node.x - 0.58, node.y, 0),
        node.color,
      );
      lines.push(line);
      group.add(line);
    });

    const packets = [
      createPacket(0xa78bfa),
      createPacket(0x818cf8),
      createPacket(0xc084fc),
      createPacket(0x67e8f9),
      createPacket(0x38bdf8),
      createPacket(0x22d3ee),
      createPacket(0xffffff),
    ];

    packets.forEach((packet) => group.add(packet));

    scene.add(new THREE.AmbientLight(0xffffff, 1.7));

    const keyLight = new THREE.PointLight(0xffffff, 4.6, 9);
    keyLight.position.set(0, 2.8, 4);
    scene.add(keyLight);

    const violetLight = new THREE.PointLight(0x8b5cf6, 7.8, 8);
    violetLight.position.set(-2.6, 1.4, 3);
    scene.add(violetLight);

    const cyanLight = new THREE.PointLight(0x22d3ee, 7.8, 8);
    cyanLight.position.set(2.6, -1.4, 3);
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

      group.rotation.y = Math.sin(time * 0.22) * 0.06;

      processor.rotation.y += 0.003;
      processor.rotation.x = Math.sin(time * 0.45) * 0.025;
      processor.scale.setScalar(1 + Math.sin(time * 1.8) * 0.018);

      [...inputCards, ...outputCards].forEach((card, index) => {
        card.position.z = Math.sin(time * 1.15 + index * 0.7) * 0.04;
      });

      const cycle = (time * 0.18) % 1;

      setPacketPosition(
        packets[0],
        cycle,
        new THREE.Vector3(-2.05, 0.92, 0.06),
        new THREE.Vector3(0, 0.18, 0.16),
      );

      setPacketPosition(
        packets[1],
        (cycle + 0.2) % 1,
        new THREE.Vector3(-2.3, 0.02, 0.06),
        new THREE.Vector3(0, 0.0, 0.16),
      );

      setPacketPosition(
        packets[2],
        (cycle + 0.4) % 1,
        new THREE.Vector3(-1.95, -0.86, 0.06),
        new THREE.Vector3(0, -0.18, 0.16),
      );

      setPacketPosition(
        packets[3],
        (cycle + 0.18) % 1,
        new THREE.Vector3(0, 0.18, 0.16),
        new THREE.Vector3(2.05, 0.92, 0.06),
      );

      setPacketPosition(
        packets[4],
        (cycle + 0.38) % 1,
        new THREE.Vector3(0, 0.0, 0.16),
        new THREE.Vector3(2.3, 0.02, 0.06),
      );

      setPacketPosition(
        packets[5],
        (cycle + 0.58) % 1,
        new THREE.Vector3(0, -0.18, 0.16),
        new THREE.Vector3(1.95, -0.86, 0.06),
      );

      setPacketPosition(
        packets[6],
        (cycle + 0.72) % 1,
        new THREE.Vector3(-2.05, 0.92, 0.06),
        new THREE.Vector3(0, 0.0, 0.16),
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

      disposeObject(group);

      lines.forEach((line) => {
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
    new THREE.CylinderGeometry(0.98, 1.1, 0.28, 128),
    new THREE.MeshPhysicalMaterial({
      color: 0xf8f7ff,
      roughness: 0.15,
      metalness: 0.5,
      transmission: 0.1,
      thickness: 0.5,
      emissive: 0x3b0764,
      emissiveIntensity: 0.16,
    }),
  );

  base.rotation.x = Math.PI / 2;

  const crystal = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.54, 5),
    new THREE.MeshPhysicalMaterial({
      color: 0xf5f3ff,
      roughness: 0.06,
      metalness: 0.34,
      transmission: 0.28,
      thickness: 0.7,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.62,
    }),
  );

  crystal.position.z = 0.1;

  const innerGlow = new THREE.Mesh(
    new THREE.SphereGeometry(0.58, 64, 64),
    new THREE.MeshBasicMaterial({
      color: 0xa78bfa,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );

  const outerGlow = new THREE.Mesh(
    new THREE.SphereGeometry(1.24, 64, 64),
    new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.06,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );

  const cyanGlow = new THREE.Mesh(
    new THREE.SphereGeometry(0.88, 64, 64),
    new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.04,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );

  const orbitA = createOrbit(0.96, 0xffffff, 0.22);
  orbitA.rotation.x = Math.PI / 2.2;
  orbitA.rotation.y = 0.35;

  const orbitB = createOrbit(1.16, 0x8b5cf6, 0.24);
  orbitB.rotation.x = Math.PI / 2.55;
  orbitB.rotation.y = -0.5;

  const orbitC = createOrbit(0.72, 0x67e8f9, 0.2);
  orbitC.rotation.x = Math.PI / 2.85;
  orbitC.rotation.y = 0.9;

  const lightDot = new THREE.Mesh(
    new THREE.SphereGeometry(0.045, 24, 24),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.96,
    }),
  );

  lightDot.position.set(-0.2, 0.18, 0.5);

  group.add(
    outerGlow,
    cyanGlow,
    innerGlow,
    base,
    crystal,
    orbitA,
    orbitB,
    orbitC,
    lightDot,
  );

  return group;
}

function createOrbit(radius: number, color: number, opacity: number) {
  return new THREE.Mesh(
    new THREE.TorusGeometry(radius, 0.006, 12, 180),
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

function createGlassCard(node: FlowNode) {
  const group = new THREE.Group();
  group.position.set(node.x, node.y, 0);

  const texture = createCardTexture(node.title, node.detail, node.color);

  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(1.2, 0.66),
    new THREE.MeshBasicMaterial({
      color: node.color,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
  );

  const face = new THREE.Mesh(
    new THREE.PlaneGeometry(0.98, 0.48),
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
  gradient.addColorStop(0, "rgba(255,255,255,0.2)");
  gradient.addColorStop(0.55, "rgba(255,255,255,0.09)");
  gradient.addColorStop(1, "rgba(255,255,255,0.03)");

  roundRect(context, 34, 42, 700, 300, 76);
  context.fillStyle = gradient;
  context.fill();

  context.strokeStyle = "rgba(255,255,255,0.26)";
  context.lineWidth = 4;
  context.stroke();

  context.shadowColor = accent;
  context.shadowBlur = 32;
  context.fillStyle = accent;
  context.beginPath();
  context.arc(124, 192, 23, 0, Math.PI * 2);
  context.fill();
  context.shadowBlur = 0;

  context.font = "700 58px Inter, Arial, sans-serif";
  context.fillStyle = "rgba(255,255,255,0.97)";
  context.fillText(title, 176, 188);

  context.font = "500 26px Inter, Arial, sans-serif";
  context.fillStyle = "rgba(255,255,255,0.54)";
  context.fillText(detail, 176, 246);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;

  return texture;
}

function createLine(start: THREE.Vector3, end: THREE.Vector3, color: number) {
  const curve = new THREE.QuadraticBezierCurve3(
    start,
    new THREE.Vector3((start.x + end.x) / 2, (start.y + end.y) / 2, 0.26),
    end,
  );

  const geometry = new THREE.BufferGeometry().setFromPoints(
    curve.getPoints(88),
  );

  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity: 0.26,
    blending: THREE.AdditiveBlending,
  });

  return new THREE.Line(geometry, material);
}

function createPacket(color: number) {
  const group = new THREE.Group();

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.055, 24, 24),
    new THREE.MeshBasicMaterial({
      color,
    }),
  );

  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 32, 32),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.13,
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
    Math.sin(progress * Math.PI) * 0.23,
  );

  packet.scale.setScalar(0.8 + Math.sin(progress * Math.PI) * 0.82);
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
  const materialWithMap = material as MaterialWithMap;

  if (materialWithMap.map) {
    materialWithMap.map.dispose();
  }

  material.dispose();
}
