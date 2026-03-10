'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/spine-model.glb');
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            const material = mesh.material as THREE.MeshStandardMaterial;
            material.metalness = 0.2;
            material.roughness = 0.4;
          }
        }
      });
    }
  }, [scene]);

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[2, 2, 2]}>
      <primitive object={scene} />
    </group>
  );
}

export default function SpineModel3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading 3D Model...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <Canvas className="bg-gradient-to-br from-blue-50 to-purple-50">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={0.5} />
        <Model />
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          minDistance={2}
          maxDistance={10}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
