export async function fetchFromSpotify(endpoint: string) {
  const token = localStorage.getItem("spotify_access_token");
  if (!token) throw new Error("No Spotify access token");

  const res = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Spotify API error: ${res.status}`);
  }

  return res.json();
}
