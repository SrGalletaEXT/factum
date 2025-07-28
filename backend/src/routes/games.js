import { Router } from 'express';
import { Game, Player, PlayerGame, GameAchievement } from '../models/index.js';
import { getOwnedGames, getGameAchievements } from '../services/steamService.js';

const router = Router();

router.get('/players/:steamid/games', async (req, res) => {
  try {
    const gamesData = await getOwnedGames(req.params.steamid);
    const player = await Player.findOne({ steamid: req.params.steamid });
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    const games = [];
    for (const g of gamesData) {
      const game = await Game.findOneAndUpdate(
        { appid: g.appid },
        g,
        { upsert: true, new: true }
      );
      await PlayerGame.findOneAndUpdate(
        { player: player._id, game: game._id },
        {},
        { upsert: true }
      );
      games.push(game);
    }
    res.json(games);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch player games' });
  }
});

router.get('/games/:appid/achievements', async (req, res) => {
  try {
    const achievementsData = await getGameAchievements(req.params.appid);
    const game = await Game.findOne({ appid: req.params.appid });
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }
    const achievements = [];
    for (const a of achievementsData) {
      const ga = await GameAchievement.findOneAndUpdate(
        { game: game._id, name: a.name },
        { ...a, game: game._id },
        { upsert: true, new: true }
      );
      achievements.push(ga);
    }
    res.json(achievements);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch achievements' });
  }
});

export default router;


