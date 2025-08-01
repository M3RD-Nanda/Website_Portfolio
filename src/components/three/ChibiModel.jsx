import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const ChibiModel = (props) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  // For now, we'll create a simple placeholder geometry
  // Later this can be replaced with: const { scene } = useGLTF("/models/chibi_character.glb");
  
  useFrame((state) => {
    if (meshRef.current) {
      // Continuous Y-axis rotation
      meshRef.current.rotation.y += 0.005;
      
      // Hover bobbing effect
      if (hovered) {
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Placeholder geometry - replace with actual model */}
      <boxGeometry args={[1, 1.5, 0.8]} />
      <meshStandardMaterial color="#FFC800" />
      
      {/* Head */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.15, 1.1, 0.35]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.15, 1.1, 0.35]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </mesh>
  );
};

// Preload the model (when we have an actual GLB file)
// useGLTF.preload("/models/chibi_character.glb");

export default ChibiModel;
