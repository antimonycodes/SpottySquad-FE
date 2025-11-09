//@ts-nocheck
//@ts-ignore
import { formations } from "./Preview";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Download, Shuffle } from "lucide-react";
import * as htmlToImage from "html-to-image";
import PitchView from "./PitchView";
import PlayerModal from "./PlayerModal";

const SquadView = ({ formation, setFormation, players, manager }: any) => {
  const [hoveredPlayer, setHoveredPlayer] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const pitchRef = useRef(null);

  const benchPlayers = players.slice(11, 18);

  const handleExport = async (format: any) => {
    if (!pitchRef.current) return;

    try {
      let dataUrl;
      if (format === "PNG") {
        dataUrl = await htmlToImage.toPng(pitchRef.current, {
          backgroundColor: "#0B0E12",
          quality: 1.0,
        });
      } else if (format === "JPEG") {
        dataUrl = await htmlToImage.toJpeg(pitchRef.current, {
          backgroundColor: "#0B0E12",
          quality: 1.0,
        });
      }

      const link: any = document.createElement("a");
      link.download = `spotify-squad-${formation}.${format.toLowerCase()}`;
      link.href = dataUrl;
      link.click();

      setShowExportModal(false);
    } catch (error) {
      console.error("Error exporting image:", error);
      alert("Failed to export image. Please try again.");
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "My Spotify First XI",
          text: "Check out my Spotify First XI squad!",
          url: window.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
    setShowShareModal(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0E12] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <select
              value={formation}
              onChange={(e) => setFormation(e.target.value)}
              className="bg-[#0F1720] text-white border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
            >
              {Object.keys(formations).map((key: any) => (
                <option key={key} value={key}>
                  {formations[key].name}
                </option>
              ))}
            </select>
            <button className="text-[#B8C0CC] hover:text-white transition-colors">
              <Shuffle className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowExportModal(true)}
              className="bg-[#1DB954] hover:bg-[#1ed760] text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
            <button
              onClick={() => setShowShareModal(true)}
              className="border border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>

        <div ref={pitchRef} className="h-[600px] mb-8">
          <PitchView
            formation={formations[formation]}
            players={players}
            onPlayerHover={setHoveredPlayer}
            onPlayerLeave={() => setHoveredPlayer(null)}
            onPlayerClick={setSelectedPlayer}
            hoveredPlayer={hoveredPlayer}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#0F1720] rounded-lg p-6">
            <h3 className="text-white text-lg font-semibold mb-4">Bench</h3>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {benchPlayers.map((player: any) => (
                <div key={player.id} className="flex-shrink-0">
                  <div className="relative w-20 h-28 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg shadow-lg border border-white/20 overflow-hidden">
                    {/* Rating Badge */}
                    <div className="absolute top-1 left-1 z-10">
                      <div className="text-white font-bold text-sm leading-none">
                        {player.popularity}
                      </div>
                      <div className="text-white/80 text-xs font-medium">
                        SUB
                      </div>
                    </div>

                    {/* Player Image */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-md overflow-hidden">
                      <img
                        src={player.albumArt}
                        alt={player.song}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Player Info */}
                    <div className="absolute bottom-1 left-1 right-1">
                      <div className="text-white font-bold text-xs truncate leading-tight">
                        {player.song}
                      </div>
                      <div className="text-white/80 text-xs truncate">
                        {player.artist}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0F1720] rounded-lg p-6">
            <h3 className="text-white text-lg font-semibold mb-4">Manager</h3>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#1DB954]">
                <img
                  src={manager.image}
                  alt={manager.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-bold">{manager.name}</h4>
                <p className="text-[#B8C0CC] text-sm">{manager.role}</p>
                <div className="flex gap-2 mt-1">
                  <span className="text-xs bg-[#1DB954]/20 text-[#1DB954] px-2 py-1 rounded">
                    Tactics: {manager.stats.tactics}
                  </span>
                  <span className="text-xs bg-[#1DB954]/20 text-[#1DB954] px-2 py-1 rounded">
                    Motivation: {manager.stats.motivation}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Player Detail Modal */}
      <PlayerModal
        player={selectedPlayer}
        isOpen={!!selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
      />

      <AnimatePresence>
        {showExportModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowExportModal(false)}
          >
            <motion.div
              className="bg-[#0F1720] rounded-lg p-6 max-w-md w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-white text-xl font-semibold mb-4">
                Export Squad
              </h3>
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleExport("PNG")}
                  className="w-full bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg text-left transition-colors"
                >
                  PNG High-res (1080x1080)
                </button>
                <button
                  onClick={() => handleExport("JPEG")}
                  className="w-full bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg text-left transition-colors"
                >
                  JPEG High-res (1080x1080)
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg text-left transition-colors">
                  PDF Poster (Premium)
                </button>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowExportModal(false)}
                  className="flex-1 border border-white/20 text-white py-2 rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleExport("PNG")}
                  className="flex-1 bg-[#1DB954] hover:bg-[#1ed760] text-white py-2 rounded-lg font-medium transition-colors"
                >
                  Export
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showShareModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              className="bg-[#0F1720] rounded-lg p-6 max-w-md w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-white text-xl font-semibold mb-4">
                Share Your Squad
              </h3>
              <div className="space-y-3 mb-6">
                <button className="w-full bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg text-left transition-colors flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">f</span>
                  </div>
                  Share on Facebook
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg text-left transition-colors flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">t</span>
                  </div>
                  Share on Twitter
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg text-left transition-colors flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">in</span>
                  </div>
                  Share on Instagram
                </button>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowShareModal(false)}
                  className="flex-1 border border-white/20 text-white py-2 rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleShare}
                  className="flex-1 bg-[#1DB954] hover:bg-[#1ed760] text-white py-2 rounded-lg font-medium transition-colors"
                >
                  Copy Link
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SquadView;
