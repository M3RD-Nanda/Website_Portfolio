import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Sphere, Box, Cone } from "@react-three/drei";

const EnhancedChibiModel = (props) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Continuous rotation animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;

      // Floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;

      // Scale on hover
      const targetScale = hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(
        { x: targetScale, y: targetScale, z: targetScale },
        0.1
      );
    }
  });

  return (
    <group
      ref={meshRef}
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Head */}
      <Sphere args={[0.8, 32, 32]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#ffdbac" />
      </Sphere>

      {/* Eyes */}
      <Sphere args={[0.1, 16, 16]} position={[-0.25, 1.6, 0.6]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      <Sphere args={[0.1, 16, 16]} position={[0.25, 1.6, 0.6]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>

      {/* Nose */}
      <Sphere args={[0.05, 16, 16]} position={[0, 1.4, 0.7]}>
        <meshStandardMaterial color="#ffb3ba" />
      </Sphere>

      {/* Body */}
      <Box args={[1, 1.5, 0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#4a90e2" />
      </Box>

      {/* Arms */}
      <Box args={[0.3, 1, 0.3]} position={[-0.8, 0.2, 0]}>
        <meshStandardMaterial color="#ffdbac" />
      </Box>
      <Box args={[0.3, 1, 0.3]} position={[0.8, 0.2, 0]}>
        <meshStandardMaterial color="#ffdbac" />
      </Box>

      {/* Legs */}
      <Box args={[0.3, 1, 0.3]} position={[-0.3, -1.2, 0]}>
        <meshStandardMaterial color="#2c3e50" />
      </Box>
      <Box args={[0.3, 1, 0.3]} position={[0.3, -1.2, 0]}>
        <meshStandardMaterial color="#2c3e50" />
      </Box>

      {/* Hair */}
      <Cone args={[0.6, 0.4, 8]} position={[0, 2.1, 0]}>
        <meshStandardMaterial color="#8b4513" />
      </Cone>

      {/* Floating particles around character */}
      {[...Array(8)].map((_, i) => (
        <Sphere
          key={i}
          args={[0.02, 8, 8]}
          position={[
            Math.cos((i * Math.PI) / 4) * 2,
            Math.sin((i * Math.PI) / 4) * 0.5 + 1,
            Math.sin((i * Math.PI) / 4) * 2,
          ]}
        >
          <meshStandardMaterial
            color="#FFC800"
            emissive="#FFC800"
            emissiveIntensity={0.3}
          />
        </Sphere>
      ))}

      {/* Floating text */}
      {hovered && (
        <Text
          position={[0, 3, 0]}
          fontSize={0.3}
          color="#FFC800"
          anchorX="center"
          anchorY="middle"
        >
          Hello! I'm Muhammad
        </Text>
      )}
    </group>
  );
};

export default EnhancedChibiModel;
