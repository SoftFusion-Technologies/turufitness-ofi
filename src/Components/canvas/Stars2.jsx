import { useState, useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// Nuevo componente Stars2
const Stars2 = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(2000), { radius: 1.5 })
  );

  // Se define un conjunto de estrellas que brillarán aleatoriamente
  const blinkingStars = useMemo(() => {
    const blinkIndices = [];
    for (let i = 0; i < 50; i++) {
      blinkIndices.push(Math.floor(Math.random() * (sphere.length / 3)));
    }
    return blinkIndices;
  }, [sphere]);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 200;
    ref.current.rotation.y += delta / 150;

    // Agregar brillo a las estrellas seleccionadas
    const elapsed = state.clock.getElapsedTime();
    const updatedPositions = [...sphere];
    for (let i = 0; i < blinkingStars.length; i++) {
      const idx = blinkingStars[i] * 3; // Multiplicamos por 3 para obtener el índice adecuado para cada coordenada
      const sizeMod = Math.sin(elapsed * 5 + idx) * 0.001; // Variación de tamaño
      updatedPositions[idx + 2] += sizeMod; // Variamos la "profundidad" para simular el brillo
    }
    ref.current.geometry.attributes.position.array = new Float32Array(
      updatedPositions
    );
    ref.current.geometry.attributes.position.needsUpdate = true; // Actualizamos la geometría
  });

  return (
    <group rotation={[0, 0, Math.PI / 3]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#FFF"
          size={0.0015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas2 = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-2]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars2 />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas2;
