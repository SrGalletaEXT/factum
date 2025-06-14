import { Schema, model, Types } from 'mongoose';

const achievementSchema = new Schema({
  game: { type: Types.ObjectId, ref: 'Game', required: true },
  apiname: String,
  achieved: Boolean,
  unlocktime: Number,
  points: Number,
});

export default model('Achievement', achievementSchema);
