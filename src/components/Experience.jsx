import { Environment, Float, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Book } from "./Book";

export const Experience = () => {
  const [minDistance, setMinDistance] = useState(2); // Default for PC

  useEffect(() => {
    // Function to update minDistance based on screen size
    const updateMinDistance = () => {
      if (window.innerWidth <= 768) {
        setMinDistance(5); // Mobile devices
      } else {
        setMinDistance(2); // PC and laptops
      }
    };

    // Set initial value
    updateMinDistance();

    // Listen for window resize
    window.addEventListener("resize", updateMinDistance);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateMinDistance);
  }, []);

  return (
    <>
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={1}
        speed={2}
        rotationIntensity={2}
      >
        <Book />
      </Float>

      {/* OrbitControls with dynamic minDistance */}
      <OrbitControls
        enableDamping={true}
        dampingFactor={0.1}
        minDistance={minDistance}
        maxDistance={3.2}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />

      <Environment preset="studio" />

      <directionalLight
        position={[2, 5, 2]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
