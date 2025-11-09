import { fetchFromSpotify } from "./spotifyApi";

export async function getTopTracks(limit = 17) {
  const data = await fetchFromSpotify(`me/top/tracks?limit=${limit}`);
  console.log(data, "top tracks");

  return data.items.map((track: any, i: number) => ({
    id: track.id,
    song: track.name,
    artist: track.artists.map((a: any) => a.name).join(", "),
    albumArt: track.album.images[0]?.url || "",
    popularity: track.popularity,
    energy: track.audio_features?.energy ?? Math.floor(Math.random() * 100), // needs audio-features fetch
    tempo: track.audio_features?.tempo ?? Math.floor(90 + Math.random() * 40),
    position: i === 0 ? "GK" : i < 5 ? "DEF" : i < 8 ? "MID" : "ATT",
  }));
}

export async function getUserProfile() {
  const user = await fetchFromSpotify("me");
  console.log(user, "user");
  return {
    id: user.id,
    name: user.display_name,
    role: "Manager",
    image: user.images?.[0]?.url || "https://picsum.photos/400",
    stats: {
      tactics: Math.floor(70 + Math.random() * 30),
      motivation: Math.floor(70 + Math.random() * 30),
      experience: Math.floor(70 + Math.random() * 30),
    },
  };
}

// Fetch features for all tracks
export async function getAudioFeatures(trackIds: string[]) {
  const data = await fetchFromSpotify(
    `audio-features?ids=${trackIds.join(",")}`
  );
  return data.audio_features;
}
