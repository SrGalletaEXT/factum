
const API_KEY = process.env.STEAM_API_KEY || '';
const BASE_URL = 'https://api.steampowered.com';

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Steam API error: ${res.status}`);
  }
  return res.json();
}

export async function getPlayerSummary(steamid) {
  const url = `${BASE_URL}/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${steamid}`;
  const data = await fetchJson(url);
  return data.response.players[0];
}

export async function getOwnedGames(steamid) {
  const url = `${BASE_URL}/IPlayerService/GetOwnedGames/v0001/?key=${API_KEY}&steamid=${steamid}&include_appinfo=1&include_played_free_games=1&format=json`;
  const data = await fetchJson(url);
  return data.response.games || [];
}

export async function getGameAchievements(appid) {
  const url = `${BASE_URL}/ISteamUserStats/GetSchemaForGame/v2/?key=${API_KEY}&appid=${appid}`;
  const data = await fetchJson(url);
  return data.game?.availableGameStats?.achievements || [];
}


