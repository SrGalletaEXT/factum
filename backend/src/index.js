import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import { Strategy as SteamStrategy } from 'passport-steam';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/factum";
const STEAM_RETURN_URL = process.env.STEAM_RETURN_URL || 'http://localhost:3000/auth/steam/return';
const STEAM_REALM = process.env.STEAM_REALM || 'http://localhost:3000/';
const STEAM_API_KEY = process.env.STEAM_API_KEY || '';

// Middleware
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true,
}));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'change_this_secret',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new SteamStrategy({
  returnURL: STEAM_RETURN_URL,
  realm: STEAM_REALM,
  apiKey: STEAM_API_KEY,
}, (identifier, profile, done) => {
  process.nextTick(() => done(null, profile));
}));

passport.serializeUser((user, done) => {
  done(null, user._json.steamid);
});

passport.deserializeUser((id, done) => {
  done(null, { steamid: id });
});

// Simple ruta test
app.get('/', (req, res) => {
  res.send('Factum Backend is running!');
});

app.get('/auth/steam', passport.authenticate('steam'));

app.get('/auth/steam/return', passport.authenticate('steam', { failureRedirect: '/' }), (req, res) => {
  req.session.steamid = req.user.steamid;
  res.redirect('http://localhost:4200');
});

app.get('/auth/logout', (req, res) => {
  req.logout?.(() => {});
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.redirect('http://localhost:4200');
  });
});

app.get('/auth/user', (req, res) => {
  res.json({ steamid: req.session.steamid || null });
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
