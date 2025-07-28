import express from 'express';
import mongoose from 'mongoose';
import playersRoutes from './routes/players.js';
import gamesRoutes from './routes/games.js';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/factum";

// Middleware
app.use(express.json());
app.use(playersRoutes);
app.use(gamesRoutes);

// Simple ruta test
app.get('/', (req, res) => {
  res.send('Factum Backend is running!');
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

