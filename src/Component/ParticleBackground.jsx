import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 500 }) {
  const mesh = useRef(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const t = Math.random();
      colors[i * 3] = 0.06 + t * 0.6;
      colors[i * 3 + 1] = 0.52 + t * 0.2;
      colors[i * 3 + 2] = 0.95;
    }

    return { positions, colors };
  }, [count]);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.elapsedTime * 0.02;
      mesh.current.rotation.y = clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={["attributes", "position"]}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "color"]}
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}


function FloatingShapes() {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(i * 1.25) * 8,
            Math.sin(i * 0.8) * 3,
            Math.sin(i * 1.25) * 8,
          ]}
        >
          <icosahedronGeometry args={[0.5, 0]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? "#0EA5E9" : "#A855F7"}
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      ))}

      {[...Array(4)].map((_, i) => (
        <mesh
          key={`oct-${i}`}
          position={[
            Math.sin(i * 1.5) * 10,
            Math.cos(i * 1.2) * 4,
            Math.cos(i * 1.5) * 10,
          ]}
        >
          <octahedronGeometry args={[0.6, 0]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? "#A855F7" : "#0EA5E9"}
            transparent
            opacity={0.25}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}


export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
    <Canvas
  camera={{ position: [0, 0, 15], fov: 60 }}
  dpr={[1, 1.5]}
  gl={{ antialias: true, powerPreference: "high-performance" }}
>
        <color attach="background" args={['#0a0c14']} />
        <fog attach="fog" args={['#0a0c14', 15, 50]} />
        <ambientLight intensity={0.5} />
        <Particles count={600} />
        <FloatingShapes />
      </Canvas>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}