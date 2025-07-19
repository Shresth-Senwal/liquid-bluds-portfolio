import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
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
    <group ref={groupRef}>
      {/* Simple geometric representation of "bluds" */}
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[0.3, 1, 0.2]} />
        <meshStandardMaterial color="#9333ea" />
      </mesh>
      
      <mesh position={[-1.2, 0, 0]}>
        <boxGeometry args={[0.3, 1, 0.2]} />
        <meshStandardMaterial color="#06b6d4" />
      </mesh>
      
      <mesh position={[-0.4, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 8]} />
        <meshStandardMaterial color="#10b981" />
      </mesh>
      
      <mesh position={[0.4, 0, 0]}>
        <boxGeometry args={[0.3, 1, 0.2]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
      
      <mesh position={[1.2, 0, 0]}>
        <sphereGeometry args={[0.3, 8, 6]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>
    </group>
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
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} color="#9333ea" intensity={0.3} />
        <FloatingLogo />
      </Canvas>
    </motion.div>
  );
};