const clientId = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
const redirectUri =
  import.meta.env.MODE === "development"
    ? "http://127.0.0.1:5173/callback"
    : "http://127.0.0.1:5173/callback";

const scopes = [
  "user-top-read",
  "playlist-read-private",
  "user-read-email",
  "user-read-private",
];

export const authConfig = {
  clientId,
  redirectUri,
  scopes,
};
