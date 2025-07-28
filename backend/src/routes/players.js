import { Router } from 'express';
import { Player } from '../models/index.js';
import { getPlayerSummary } from '../services/steamService.js';

const router = Router();

router.get('/players/:steamid', async (req, res) => {
  try {
    const summary = await getPlayerSummary(req.params.steamid);
    if (!summary) {
      return res.status(404).json({ message: 'Player not found' });
    }
    const player = await Player.findOneAndUpdate(
      { steamid: summary.steamid },
      summary,
      { upsert: true, new: true }
    );
    res.json(player);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch player data' });
  }
});

export default router;


