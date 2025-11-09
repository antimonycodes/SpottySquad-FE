import { Download, Play, Settings, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { mockPlayers } from "./Preview";
import { loginWithSpotify } from "../services/spotifyAuth";

const HomeView = ({ onGenerateSquad }: any) => {
  return (
    <div className="min-h-screen bg-[#0B0E12]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Your Music.
              <br />
              <span className="text-[#1DB954]">Your Squad.</span>
            </motion.h1>

            <motion.p
              className="text-xl text-[#B8C0CC] mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Create your ultimate music lineup from your top Spotify tracks
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                // onClick={onGenerateSquad}
                onClick={loginWithSpotify}
                className="bg-[#1DB954] hover:bg-[#1ed760] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Generate My First XI
              </button>
              <button className="border border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Join Tournament
              </button>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-[#0F1720] rounded-xl p-8 shadow-[0_10px_48px_rgba(2,6,23,0.7)]">
              <div className="grid grid-cols-3 gap-4">
                {mockPlayers.slice(0, 9).map((player, i) => (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#1e293b] ring-2 ring-[#1DB954]/50 overflow-hidden mb-2 mx-auto">
                      <img
                        src={player.albumArt}
                        alt={player.song}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-white text-xs truncate">{player.song}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <Download className="w-8 h-8 text-[#1DB954] mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">
              Beautiful Posters
            </h3>
            <p className="text-[#B8C0CC]">
              Export high-res shareable squad images for social media
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <Trophy className="w-8 h-8 text-[#2AC7FF] mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">Compete</h3>
            <p className="text-[#B8C0CC]">
              Tournament brackets and in-system scoring
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <Settings className="w-8 h-8 text-[#8A3FFC] mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">Trusted</h3>
            <p className="text-[#B8C0CC]">
              Privacy-first: manual playlist & limited OAuth beta
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeView;
