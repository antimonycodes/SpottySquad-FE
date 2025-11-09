import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function FootballPitch() {
  const { scene } = useGLTF("/models/pitch.glb"); // put .glb in /public/models/
  return <primitive object={scene} scale={0.8} />;
}

export default function PitchScene() {
  return (
    <Canvas camera={{ position: [0, 20, 40], fov: 45 }}>
      {/* Ambient + directional light */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 20, 10]} intensity={1} />

      {/* Football Pitch */}
      <FootballPitch />

      {/* Camera Controls */}
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
