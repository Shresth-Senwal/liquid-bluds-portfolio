import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
      meshRef.current.rotation.y = t * 0.3;
      meshRef.current.position.y = Math.sin(t * 0.7) * 0.3;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.4;
      torusRef.current.rotation.z = Math.sin(t * 0.6) * 0.2;
      torusRef.current.position.x = Math.sin(t * 0.3) * 0.5;
    }

    if (boxRef.current) {
      boxRef.current.rotation.y = t * 0.2;
      boxRef.current.rotation.z = Math.sin(t * 0.4) * 0.1;
      boxRef.current.position.z = Math.sin(t * 0.5) * 0.3;
    }
  });

  return (
    <group>
      {/* Main sphere */}
      <Sphere ref={meshRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#9333ea"
          metalness={0.8}
          roughness={0.2}
          emissive="#4c1d95"
          emissiveIntensity={0.1}
        />
      </Sphere>

      {/* Orbiting torus */}
      <Torus ref={torusRef} args={[0.4, 0.1, 16, 32]} position={[2, 0, 0]}>
        <meshStandardMaterial
          color="#06b6d4"
          metalness={0.6}
          roughness={0.3}
          emissive="#0891b2"
          emissiveIntensity={0.1}
        />
      </Torus>

      {/* Floating box */}
      <Box ref={boxRef} args={[0.6, 0.6, 0.6]} position={[-1.5, 1, 0]}>
        <meshStandardMaterial
          color="#10b981"
          metalness={0.7}
          roughness={0.2}
          emissive="#047857"
          emissiveIntensity={0.1}
        />
      </Box>
    </group>
  );
};

interface ModelViewerProps {
  className?: string;
}

export const ModelViewer: React.FC<ModelViewerProps> = ({ className = '' }) => {
  return (
    <motion.div
      className={`w-full h-96 ${className}`}
      initial={{ opacity: 0, rotateY: -90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Canvas camera={{ position: [5, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#9333ea" intensity={0.5} />
        <FloatingGeometry />
      </Canvas>
    </motion.div>
  );
};