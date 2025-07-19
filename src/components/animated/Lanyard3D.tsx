import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, useMatcapTexture } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const RotatingText = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.2;
    }
  });

  return (
    <Center>
      <Text3D
        ref={meshRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.8}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        bluds
        <meshMatcapMaterial matcap={matcapTexture} />
      </Text3D>
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
        <pointLight position={[10, 10, 10]} />
        <RotatingText />
      </Canvas>
    </motion.div>
  );
};