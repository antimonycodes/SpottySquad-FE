import { useEffect } from "react";
import { handleCallback } from "../services/spotifyAuth";

const Callback = () => {
  useEffect(() => {
    handleCallback().then(() => {
      window.location.href = "/"; // back to homepage
    });
  }, []);

  return <div className="text-white p-6">Connecting to Spotify...</div>;
};

export default Callback;
