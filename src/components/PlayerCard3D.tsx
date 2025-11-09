//@ts-ignore
//@ts-nocheck
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const PlayerCard3D = ({
  player,
  position,
  positionIndex,
  isVisible,
  delay,
  isHovered,
  onHover,
  onLeave,
  onClick,
}: any) => {
  const meshRef = useRef<any>();

  useFrame(() => {
    if (meshRef.current && isVisible) {
      meshRef.current.position.lerp(position, 0.1);
    }
  });

  // Nigerian-inspired theme (green, white, black)
  const cardBase =
    "relative w-28 h-36 md:w-32 md:h-44 bg-white rounded-xl border-4 border-green-600 shadow-[0_8px_30px_rgba(0,128,0,0.5)] overflow-hidden cursor-pointer transition-transform duration-300";

  // Abbreviation by formation slot
  const getPositionAbbrev = (index: any) => {
    if (index === 0) return "GK";
    if (index <= 4) return "DEF";
    if (index <= 7) return "MID";
    return "ATT";
  };

  return (
    <motion.mesh
      ref={meshRef}
      position={[0, 10, 0]} // Start position above the pitch
      initial={{ scale: 0 }}
      animate={{ scale: isVisible ? (isHovered ? 1.1 : 1) : 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: delay,
      }}
      onPointerOver={onHover}
      onPointerOut={onLeave}
      onClick={onClick}
    >
      <boxGeometry args={[1, 1.4, 0.1]} />
      <meshStandardMaterial color="green" />
      <Html distanceFactor={15} transform position={[0, 0, 0.06]}>
        <div className={`${cardBase} ${isHovered ? "scale-110" : ""}`}>
          {/* Popularity + Position */}
          <div className="absolute top-2 left-2 text-black z-10">
            <div className="font-extrabold text-lg md:text-xl leading-none">
              {player.popularity}
            </div>
            <div className="text-green-700 text-xs font-semibold">
              {getPositionAbbrev(positionIndex)}
            </div>
          </div>

          {/* Album Art */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 border-green-500 shadow-md">
            <img
              src={player.albumArt}
              alt={player.song}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Song + Artist */}
          <div className="absolute bottom-2 left-2 right-2 text-center">
            <div className="text-black font-bold text-xs md:text-sm truncate leading-tight">
              {player.song}
            </div>
            <div className="text-green-700 text-xs truncate">
              {player.artist}
            </div>
          </div>
        </div>
      </Html>
    </motion.mesh>
  );
};

export default PlayerCard3D;
