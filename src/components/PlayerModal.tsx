import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";

const PlayerModal = ({ player, isOpen, onClose }: any) => {
  if (!player) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[#0F1720] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={player.albumArt}
                    alt={player.song}
                    className="w-48 h-48 rounded-lg object-cover shadow-lg"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {player.song}
                  </h2>
                  <p className="text-[#1DB954] text-lg mb-4">{player.artist}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-white/70 text-sm">Popularity</p>
                      <p className="text-white text-xl font-bold">
                        {player.popularity}
                      </p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-white/70 text-sm">Energy</p>
                      <p className="text-white text-xl font-bold">
                        {player.energy}
                      </p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-white/70 text-sm">Tempo</p>
                      <p className="text-white text-xl font-bold">
                        {player.tempo}
                      </p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-white/70 text-sm">Position</p>
                      <p className="text-white text-xl font-bold">
                        {player.position}
                      </p>
                    </div>
                  </div>

                  <button className="bg-[#1DB954] hover:bg-[#1ed760] text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Play on Spotify
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlayerModal;
