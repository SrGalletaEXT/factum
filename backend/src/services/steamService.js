import axios from 'axios';

const { STEAM_API_KEY } = process.env;

if (!STEAM_API_KEY) {
  console.warn('STEAM_API_KEY not set in environment variables');
}

const api = axios.create({
  baseURL: 'https://api.steampowered.com',
  params: { key: STEAM_API_KEY }
});

export const getPlayerSummaries = async (steamIds) => {
  const ids = Array.isArray(steamIds) ? steamIds.join(',') : steamIds;
  const { data } = await api.get('/ISteamUser/GetPlayerSummaries/v2/', {
    params: { steamids: ids }
  });
  return data.response.players;
};

export const getOwnedGames = async (steamId, options = {}) => {
  const { data } = await api.get('/IPlayerService/GetOwnedGames/v1/', {
    params: { steamid: steamId, ...options }
  });
  return data.response;
};

export const getPlayerAchievements = async (steamId, appId) => {
  const { data } = await api.get('/ISteamUserStats/GetPlayerAchievements/v1/', {
    params: { steamid: steamId, appid: appId }
  });
  return data.playerstats;
};

export const getSchemaForGame = async (appId) => {
  const { data } = await api.get('/ISteamUserStats/GetSchemaForGame/v2/', {
    params: { appid: appId }
  });
  return data.game;
};

export default {
  getPlayerSummaries,
  getOwnedGames,
  getPlayerAchievements,
  getSchemaForGame
};
