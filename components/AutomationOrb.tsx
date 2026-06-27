"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AutomationOrb() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.75, 2),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.18,
        metalness: 0.45,
        emissive: 0x7c3aed,
        emissiveIntensity: 0.45,
      }),
    );
    group.add(core);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });

    const rings = [0, 1, 2].map((index) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.35 + index * 0.28, 0.01, 12, 96),
        ringMaterial.clone(),
      );

      ring.rotation.x = Math.PI / 2 + index * 0.55;
      ring.rotation.y = index * 0.4;
      group.add(ring);

      return ring;
    });

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 90;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i += 1) {
      const radius = 1.7 + Math.random() * 1.15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color: 0x67e8f9,
        size: 0.035,
        transparent: true,
        opacity: 0.75,
      }),
    );
    group.add(particles);

    scene.add(new THREE.AmbientLight(0xffffff, 1.2));

    const violetLight = new THREE.PointLight(0x8b5cf6, 8, 8);
    violetLight.position.set(2, 2, 3);
    scene.add(violetLight);

    const cyanLight = new THREE.PointLight(0x22d3ee, 5, 8);
    cyanLight.position.set(-2, -1.5, 2);
    scene.add(cyanLight);

    let frameId = 0;

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      group.rotation.y += 0.004;
      core.rotation.x += 0.006;
      core.rotation.y += 0.008;
      particles.rotation.y -= 0.0015;

      rings.forEach((ring, index) => {
        ring.rotation.z += 0.003 + index * 0.001;
      });

      renderer.render(scene, camera);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);

      mount.removeChild(renderer.domElement);

      particlesGeometry.dispose();
      core.geometry.dispose();
      core.material.dispose();

      rings.forEach((ring) => {
        ring.geometry.dispose();
        if (Array.isArray(ring.material)) {
          ring.material.forEach((material) => material.dispose());
        } else {
          ring.material.dispose();
        }
      });

      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="h-44 w-full" />;
}
