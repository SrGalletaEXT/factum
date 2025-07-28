import { Schema, model, Types } from 'mongoose';

const playerAchievementSchema = new Schema({
  player: { type: Types.ObjectId, ref: 'Player', required: true },
  achievement: { type: Types.ObjectId, ref: 'GameAchievement', required: true },
  game: { type: Types.ObjectId, ref: 'Game', required: true },
  unlocktime: Number,
  points: Number,
});

playerAchievementSchema.index({ player: 1, achievement: 1 }, { unique: true });

export default model('PlayerAchievement', playerAchievementSchema);
