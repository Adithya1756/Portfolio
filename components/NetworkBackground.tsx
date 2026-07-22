"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 90;
const MAX_DIST = 2.6;

function Nodes() {
  const pointsRef = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(NODE_COUNT * 3);
    const velocities = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      velocities[i * 3] = (Math.random() - 0.5) * 0.004;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.004;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return { positions, velocities };
  }, []);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const maxLines = NODE_COUNT * 8;
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(maxLines * 2 * 3), 3)
    );
    return geo;
  }, []);

  useFrame((state) => {
    const pos = pointsRef.current?.geometry.attributes.position as THREE.BufferAttribute;
    if (!pos) return;

    for (let i = 0; i < NODE_COUNT; i++) {
      let x = pos.array[i * 3] + velocities[i * 3];
      let y = pos.array[i * 3 + 1] + velocities[i * 3 + 1];
      let z = pos.array[i * 3 + 2] + velocities[i * 3 + 2];

      if (x > 6 || x < -6) velocities[i * 3] *= -1;
      if (y > 3.5 || y < -3.5) velocities[i * 3 + 1] *= -1;
      if (z > 2 || z < -2) velocities[i * 3 + 2] *= -1;

      pos.array[i * 3] = x;
      pos.array[i * 3 + 1] = y;
      pos.array[i * 3 + 2] = z;
    }
    pos.needsUpdate = true;

    // recompute connecting lines between near nodes
    const linePos = lineGeometry.attributes.position as THREE.BufferAttribute;
    let idx = 0;
    const maxLines = NODE_COUNT * 8;
    for (let i = 0; i < NODE_COUNT && idx < maxLines; i++) {
      for (let j = i + 1; j < NODE_COUNT && idx < maxLines; j++) {
        const dx = pos.array[i * 3] - pos.array[j * 3];
        const dy = pos.array[i * 3 + 1] - pos.array[j * 3 + 1];
        const dz = pos.array[i * 3 + 2] - pos.array[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < MAX_DIST) {
          linePos.array[idx * 6] = pos.array[i * 3];
          linePos.array[idx * 6 + 1] = pos.array[i * 3 + 1];
          linePos.array[idx * 6 + 2] = pos.array[i * 3 + 2];
          linePos.array[idx * 6 + 3] = pos.array[j * 3];
          linePos.array[idx * 6 + 4] = pos.array[j * 3 + 1];
          linePos.array[idx * 6 + 5] = pos.array[j * 3 + 2];
          idx++;
        }
      }
    }
    lineGeometry.setDrawRange(0, idx * 2);
    linePos.needsUpdate = true;

    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(t * 0.04) * 0.15;
      groupRef.current.rotation.x = Math.cos(t * 0.05) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#3654F5" size={0.05} sizeAttenuation transparent opacity={0.7} />
      </points>
      <lineSegments ref={lineRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#14151A" transparent opacity={0.08} />
      </lineSegments>
    </group>
  );
}

export default function NetworkBackground({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Nodes />
      </Canvas>
    </div>
  );
}
