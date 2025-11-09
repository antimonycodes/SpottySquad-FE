import { authConfig } from "../config/spotifyAuth";
import { generateCodeVerifier, generateCodeChallenge } from "../utils/pkce";

export async function loginWithSpotify() {
  const verifier = generateCodeVerifier();

  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem("spotify_code_verifier", verifier);
  console.log(verifier);

  const params = new URLSearchParams({
    response_type: "code",
    client_id: authConfig.clientId,
    scope: authConfig.scopes.join(" "),
    redirect_uri: authConfig.redirectUri,
    code_challenge_method: "S256",
    code_challenge: challenge,
  });

  window.location.href = `https://accounts.spotify.com/authorize?${params}`;
}

export async function handleCallback() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  if (!code) return null;

  const verifier = localStorage.getItem("spotify_code_verifier");
  if (!verifier) throw new Error("Missing PKCE verifier");

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: authConfig.redirectUri,
    client_id: authConfig.clientId,
    code_verifier: verifier,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const data = await res.json();

  if (data.access_token) {
    localStorage.setItem("spotify_access_token", data.access_token);
    localStorage.setItem("spotify_refresh_token", data.refresh_token);
  }

  return data;
}
