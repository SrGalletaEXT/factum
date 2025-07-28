import express from 'express';
import mongoose from 'mongoose';

import { Player, PlayerAchievement, Game, GameAchievement } from './models/index.js';
import calculatePoints from './utils/calculatePoints.js';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/factum";
const STEAM_API_KEY = process.env.STEAM_API_KEY || '';

// Middleware
app.use(express.json());

// Simple ruta test
app.get('/', (req, res) => {
  res.send('Factum Backend is running!');
});

// Leaderboard endpoint
app.get('/leaderboard', async (req, res) => {
  try {
    const achievements = await PlayerAchievement.find()
      .populate('player')
      .populate('game')
      .populate('achievement');

    const scores = {};

    achievements.forEach(a => {
      const percent = a.achievement?.percent || 0;
      const playtime = a.game?.playtime_forever || 0;
      const points = a.points ?? calculatePoints(percent, playtime, a.unlocktime);
      const pid = a.player.id;
      if (!scores[pid]) {
        scores[pid] = {
          steamid: a.player.steamid,
          personaname: a.player.personaname,
          totalPoints: 0
        };
      }
      scores[pid].totalPoints += points;
    });

    const leaderboard = Object.values(scores).sort((a, b) => b.totalPoints - a.totalPoints);
    res.json(leaderboard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate leaderboard' });
  }
});

// Conexión a MongoDB
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
