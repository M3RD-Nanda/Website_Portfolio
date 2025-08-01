import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Floating 3D Particles
const FloatingParticles = ({ count = 1000 }) => {
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp.set(
        [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ],
        i * 3
      );
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      mesh.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FFC800"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

// Geometric Shapes
const FloatingGeometry = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[3, 0, -5]}>
      <octahedronGeometry args={[0.5, 0]} />
      <meshBasicMaterial color="#FFC800" transparent opacity={0.1} wireframe />
    </mesh>
  );
};

// Animated Grid
const AnimatedGrid = () => {
  const gridRef = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      gridRef.current.position.z = ((state.clock.elapsedTime * 0.5) % 2) - 1;
    }
  });

  return (
    <mesh ref={gridRef} position={[0, 0, -8]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshBasicMaterial color="#FFC800" transparent opacity={0.05} wireframe />
    </mesh>
  );
};

// Energy Orbs
const EnergyOrbs = () => {
  const orbsRef = useRef();

  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.children.forEach((orb, index) => {
        orb.position.x = Math.sin(state.clock.elapsedTime + index) * 3;
        orb.position.y = Math.cos(state.clock.elapsedTime + index) * 2;
        orb.position.z = Math.sin(state.clock.elapsedTime * 0.5 + index) * 1;
        orb.scale.setScalar(
          0.5 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.2
        );
      });
    }
  });

  return (
    <group ref={orbsRef}>
      {Array.from({ length: 5 }, (_, i) => (
        <mesh key={i} position={[0, 0, -3]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="#FFC800" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
};

const Advanced3DBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#FFC800" />

        <FloatingParticles count={800} />
        <FloatingGeometry />
        <AnimatedGrid />
        <EnergyOrbs />

        {/* Additional geometric elements */}
        <mesh position={[-4, 2, -6]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial
            color="#FFC800"
            transparent
            opacity={0.08}
            wireframe
          />
        </mesh>

        <mesh position={[4, -2, -4]}>
          <tetrahedronGeometry args={[0.3, 0]} />
          <meshBasicMaterial
            color="#FFC800"
            transparent
            opacity={0.12}
            wireframe
          />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Advanced3DBackground;
