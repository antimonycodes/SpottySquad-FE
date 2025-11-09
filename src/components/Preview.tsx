import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGLTF } from "@react-three/drei";
import { Trophy } from "lucide-react";
import SquadView from "./SquadView";
import HomeView from "./HomeView";
import Header from "./Header";
import { getTopTracks, getUserProfile } from "../services/spotifyData";

// Mock data for demonstration
export const mockPlayers = [
  {
    id: 1,
    song: "Essence",
    artist: "Wizkid ft. Tems",
    albumArt: "https://picsum.photos/400?random=1",
    popularity: 95,
    energy: 78,
    tempo: 103,
    position: "GK",
  },
  {
    id: 2,
    song: "Last Last",
    artist: "Burna Boy",
    albumArt: "https://picsum.photos/400?random=2",
    popularity: 94,
    energy: 82,
    tempo: 120,
    position: "DEF",
  },
  {
    id: 3,
    song: "Calm Down",
    artist: "Rema",
    albumArt: "https://picsum.photos/400?random=3",
    popularity: 92,
    energy: 80,
    tempo: 108,
    position: "DEF",
  },
  {
    id: 4,
    song: "Feel",
    artist: "Davido",
    albumArt: "https://picsum.photos/400?random=4",
    popularity: 90,
    energy: 84,
    tempo: 115,
    position: "DEF",
  },
  {
    id: 5,
    song: "Soso",
    artist: "Omah Lay",
    albumArt: "https://picsum.photos/400?random=5",
    popularity: 88,
    energy: 74,
    tempo: 100,
    position: "DEF",
  },
  {
    id: 6,
    song: "Rush",
    artist: "Ayra Starr",
    albumArt: "https://picsum.photos/400?random=6",
    popularity: 91,
    energy: 77,
    tempo: 105,
    position: "MID",
  },
  {
    id: 7,
    song: "Who is Your Guy?",
    artist: "Spyro",
    albumArt: "https://picsum.photos/400?random=7",
    popularity: 85,
    energy: 73,
    tempo: 99,
    position: "MID",
  },
  {
    id: 8,
    song: "Unavailable",
    artist: "Davido ft. Musa Keys",
    albumArt: "https://picsum.photos/400?random=8",
    popularity: 89,
    energy: 86,
    tempo: 122,
    position: "MID",
  },
  {
    id: 9,
    song: "Terminator",
    artist: "Asake",
    albumArt: "https://picsum.photos/400?random=9",
    popularity: 90,
    energy: 88,
    tempo: 118,
    position: "ATT",
  },
  {
    id: 10,
    song: "Cough (Odo)",
    artist: "Kizz Daniel",
    albumArt: "https://picsum.photos/400?random=10",
    popularity: 87,
    energy: 76,
    tempo: 106,
    position: "ATT",
  },
  {
    id: 11,
    song: "Finesse",
    artist: "Pheelz ft. BNXN",
    albumArt: "https://picsum.photos/400?random=11",
    popularity: 89,
    energy: 81,
    tempo: 111,
    position: "ATT",
  },
  // Bench players
  {
    id: 12,
    song: "Over Dem",
    artist: "Burna Boy",
    albumArt: "https://picsum.photos/400?random=12",
    popularity: 84,
    energy: 79,
    tempo: 112,
    position: "MID",
  },
  {
    id: 13,
    song: "Propeller",
    artist: "Jae5 ft. Dave & BNXN",
    albumArt: "https://picsum.photos/400?random=13",
    popularity: 83,
    energy: 75,
    tempo: 98,
    position: "MID",
  },
  {
    id: 14,
    song: "Bandana",
    artist: "Fireboy DML & Asake",
    albumArt: "https://picsum.photos/400?random=14",
    popularity: 86,
    energy: 82,
    tempo: 116,
    position: "ATT",
  },
  {
    id: 15,
    song: "Buga",
    artist: "Kizz Daniel & Tekno",
    albumArt: "https://picsum.photos/400?random=15",
    popularity: 88,
    energy: 85,
    tempo: 119,
    position: "ATT",
  },
  {
    id: 16,
    song: "Peace Be Unto You",
    artist: "Asake",
    albumArt: "https://picsum.photos/400?random=16",
    popularity: 82,
    energy: 78,
    tempo: 104,
    position: "DEF",
  },
  {
    id: 17,
    song: "Sip (Alcohol)",
    artist: "Joeboy",
    albumArt: "https://picsum.photos/400?random=17",
    popularity: 85,
    energy: 80,
    tempo: 107,
    position: "MID",
  },
  {
    id: 18,
    song: "Peru",
    artist: "Fireboy DML",
    albumArt: "https://picsum.photos/400?random=18",
    popularity: 87,
    energy: 83,
    tempo: 113,
    position: "ATT",
  },
];

// Manager/Coach data

export const formations = {
  "4-3-3": {
    name: "4-3-3",
    positions: [
      { x: 0, y: 0.1, z: -32 }, // GK
      { x: -18, y: 0.1, z: -15 }, // DEF
      { x: -6, y: 0.1, z: -15 }, // DEF
      { x: 6, y: 0.1, z: -15 }, // DEF
      { x: 18, y: 0.1, z: -15 }, // DEF
      { x: -12, y: 0.1, z: 0 }, // MID
      { x: 0, y: 0.1, z: 0 }, // MID
      { x: 12, y: 0.1, z: 0 }, // MID
      { x: -15, y: 0.1, z: 20 }, // ATT
      { x: 0, y: 0.1, z: 22 }, // ATT
      { x: 15, y: 0.1, z: 20 }, // ATT
    ],
  },
  "4-4-2": {
    name: "4-4-2",
    positions: [
      { x: 0, y: 0.1, z: -32 }, // GK
      { x: -18, y: 0.1, z: -15 }, // DEF
      { x: -6, y: 0.1, z: -15 }, // DEF
      { x: 6, y: 0.1, z: -15 }, // DEF
      { x: 18, y: 0.1, z: -15 }, // DEF
      { x: -18, y: 0.1, z: 5 }, // MID
      { x: -6, y: 0.1, z: 5 }, // MID
      { x: 6, y: 0.1, z: 5 }, // MID
      { x: 18, y: 0.1, z: 5 }, // MID
      { x: -9, y: 0.1, z: 22 }, // ATT
      { x: 9, y: 0.1, z: 22 }, // ATT
    ],
  },
};

// 3D Football Pitch Component
export function FootballPitch() {
  const { scene } = useGLTF("/models/pitch.glb");
  return <primitive object={scene} scale={0.8} position={[0, 0, 0]} />;
}

const SpotifyFirstXI = () => {
  const [currentView, setCurrentView] = useState("home");
  const [currentFormation, setCurrentFormation] = useState("4-3-3");
  //   const [squadPlayers] = useState(mockPlayers.slice(0, 11));
  const [squadPlayers, setSquadPlayers] = useState<any[]>([]);
  const [manager, setManager] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const tracks = await getTopTracks(17);

        // fetch audio features for energy/tempo
        // const features = await getAudioFeatures(tracks.map((t) => t.id));
        // const enriched = tracks.map((t, i) => ({
        //   ...t,
        //   energy: Math.round(features[i]?.energy * 100),
        //   tempo: Math.round(features[i]?.tempo),
        // }));

        setSquadPlayers(tracks);
        setManager(await getUserProfile());
      } catch (err) {
        console.error("Spotify fetch failed", err);
      }
    }
    loadData();
  }, []);

  console.log(manager, "manager");

  const handleGenerateSquad = () => {
    setCurrentView("squad");
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "home":
        return <HomeView onGenerateSquad={handleGenerateSquad} />;
      case "squad":
        return (
          <SquadView
            formation={currentFormation}
            setFormation={setCurrentFormation}
            players={squadPlayers}
            manager={manager}
          />
        );
      case "tournament":
        return (
          <div className="min-h-screen bg-[#0B0E12] flex items-center justify-center">
            <div className="text-center">
              <Trophy className="w-16 h-16 text-[#1DB954] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">
                Tournament Mode
              </h2>
              <p className="text-[#B8C0CC]">
                Coming soon! Compete against other squads.
              </p>
            </div>
          </div>
        );
      default:
        return <HomeView onGenerateSquad={handleGenerateSquad} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0E12] text-white">
      <Header onNavigate={setCurrentView} currentView={currentView} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderCurrentView()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SpotifyFirstXI;
