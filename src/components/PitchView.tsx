import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import PlayerCard3D from "./PlayerCard3D";
import { OrbitControls } from "@react-three/drei";
import { FootballPitch } from "./Preview";

const PitchView = ({
  formation,
  players,
  onPlayerHover,
  onPlayerLeave,
  onPlayerClick,
  hoveredPlayer,
}: any) => {
  const [visiblePlayers, setVisiblePlayers] = useState(
    Array(players.length).fill(false)
  );
  const [isOverCanvas, setIsOverCanvas] = useState(false);

  useEffect(() => {
    // Animate players appearing in sequence
    const timeouts = players.map((_: any, index: any) => {
      return setTimeout(() => {
        setVisiblePlayers((prev) => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }, index * 800); // 300ms delay between each player
    });

    return () => timeouts.forEach((t: any) => clearTimeout(t));
  }, [players.length]);

  return (
    <div
      className="relative w-full h-full bg-[#0B0E12] rounded-lg overflow-hidden"
      onMouseEnter={() => setIsOverCanvas(true)}
      onMouseLeave={() => setIsOverCanvas(false)}
    >
      <Canvas
        camera={{ position: [0, 40, 40], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 20, 10]} intensity={1} />
        <directionalLight position={[-10, 20, -10]} intensity={0.5} />

        {/* Football Pitch Model */}
        <FootballPitch />

        {/* Player Cards positioned on the pitch */}
        {formation.positions.map((position: any, index: any) => {
          const player = players[index];
          if (!player) return null;

          return (
            <PlayerCard3D
              key={player.id}
              player={player}
              position={position}
              positionIndex={index}
              isVisible={visiblePlayers[index]}
              delay={index * 0.1}
              isHovered={hoveredPlayer === player.id}
              onHover={() => onPlayerHover(player.id)}
              onLeave={() => onPlayerLeave()}
              onClick={() => onPlayerClick(player)}
            />
          );
        })}

        {/* Camera Controls - disable when not hovering over canvas */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          enabled={isOverCanvas}
          maxDistance={80}
          minDistance={20}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>
    </div>
  );
};

export default PitchView;
