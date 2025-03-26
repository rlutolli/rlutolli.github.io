'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Footer() {
  return (
    <footer className="text-quaternary mx-auto max-w-2xl border-t border-dashed border-gray-200 px-8 py-12 pb-24 pt-4 text-sm dark:border-gray-200 dark:text-gray-600">
      <FooterGraphic />
      <div className="flex flex-col gap-6 py-6">
        <p className="py-2">Personal website WIP • Built with Next.js & TailwindCSS • 
          <span className="group inline-flex items-center transition-all duration-300 hover:text-primary">
            This website was cloned from an open-source template. (
            <a
              href="https://github.com/cristicretu/cretu.dev"
              rel="noopener noreferrer"
              target="_blank"
              className="group-hover:underline group-hover:text-blue-500 transition-all duration-300"
            >
              Source
            </a>
            )
            <span className="ml-1 inline-block transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </p>
      </div>
    </footer>
  );
}

function PixelatedSphere() {
  const sphereRef = useRef();

  useFrame(({ clock }: { clock: any }) => {
    if (sphereRef.current) {
      (sphereRef.current as any).rotation.y = clock.getElapsedTime() * 1.2;
      (sphereRef.current as any).rotation.z = clock.getElapsedTime() * 0.7;
    }
  });

  return (
    <points ref={sphereRef as any}>
      <icosahedronGeometry args={[1, 4]} />
      <pointsMaterial color="gray" size={0.05} />
    </points>
  );
}

function Birds() {
  const groupRef = useRef();

  useFrame(({ clock }: { clock: any }) => {
    if (!groupRef.current) return;
    const elapsedTime = clock.getElapsedTime();
    (groupRef.current as any).children.forEach(
      (
        bird: { position: { x: number; y: number; z: number } },
        index: number,
      ) => {
        const angle = (elapsedTime + index * 0.2) % (2 * Math.PI);
        const radius = 2.3 + Math.random() * 0.0001;
        bird.position.x =
          radius * Math.cos(angle) - Math.sin(elapsedTime * 0.5 + index);
        bird.position.y =
          radius * Math.sin(angle) * Math.sin(elapsedTime * 0.5 + index);
        bird.position.z = radius * Math.cos(elapsedTime * 0.5 + index);
      },
    );
  });

  const birds = [...Array(48)].map((_, i) => {
    const size = i % 2 === 0 ? 0.03 : 0.05;
    return (
      <mesh key={i} position={[1, 0, 0]}>
        <planeGeometry args={[size, size]} />
        <meshBasicMaterial color="gray" />
      </mesh>
    );
  });

  return <group ref={groupRef as any}>{birds}</group>;
}

function FooterGraphic() {
  return (
    <div className="pt-12 pb-12 mt-6 mb-6">
      <Canvas camera={{ fov: 40, position: [0, 0, 5] }} gl={{ antialias: false }} style={{ height: '200px' }}>
        <PixelatedSphere />
        <Birds />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
