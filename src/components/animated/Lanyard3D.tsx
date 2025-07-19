import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const FloatingLogo = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.2;
    }
  });

  return (
    <Center>
      <group ref={groupRef}>
        {/* Create "bluds" using geometric shapes */}
        {/* Letter B */}
        <Box args={[0.15, 0.8, 0.1]} position={[-1.5, 0, 0]}>
          <meshStandardMaterial color="#9333ea" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[0.4, 0.15, 0.1]} position={[-1.2, 0.25, 0]}>
          <meshStandardMaterial color="#9333ea" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[0.4, 0.15, 0.1]} position={[-1.2, -0.25, 0]}>
          <meshStandardMaterial color="#9333ea" metalness={0.8} roughness={0.2} />
        </Box>

        {/* Letter L */}
        <Box args={[0.15, 0.8, 0.1]} position={[-0.8, 0, 0]}>
          <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[0.4, 0.15, 0.1]} position={[-0.5, -0.325, 0]}>
          <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
        </Box>

        {/* Letter U */}
        <Box args={[0.15, 0.6, 0.1]} position={[-0.1, 0.1, 0]}>
          <meshStandardMaterial color="#10b981" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[0.15, 0.6, 0.1]} position={[0.2, 0.1, 0]}>
          <meshStandardMaterial color="#10b981" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[0.4, 0.15, 0.1]} position={[0.05, -0.275, 0]}>
          <meshStandardMaterial color="#10b981" metalness={0.8} roughness={0.2} />
        </Box>

        {/* Letter D */}
        <Box args={[0.15, 0.8, 0.1]} position={[0.6, 0, 0]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[0.3, 0.15, 0.1]} position={[0.85, 0.325, 0]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[0.3, 0.15, 0.1]} position={[0.85, -0.325, 0]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[0.15, 0.4, 0.1]} position={[1.0, 0, 0]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
        </Box>

        {/* Letter S */}
        <Box args={[0.4, 0.15, 0.1]} position={[1.5, 0.325, 0]}>
          <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[0.4, 0.15, 0.1]} position={[1.5, 0, 0]}>
          <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[0.4, 0.15, 0.1]} position={[1.5, -0.325, 0]}>
          <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
        </Box>
      </group>
    </Center>
  );
};

interface Lanyard3DProps {
  className?: string;
}

export const Lanyard3D: React.FC<Lanyard3DProps> = ({ className = '' }) => {
  return (
    <motion.div
      className={`w-full h-48 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#9333ea" intensity={0.5} />
        <FloatingLogo />
      </Canvas>
    </motion.div>
  );
};