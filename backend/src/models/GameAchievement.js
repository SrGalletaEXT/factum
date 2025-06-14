import { Schema, model, Types } from 'mongoose';

const gameAchievementSchema = new Schema({
  game: { type: Types.ObjectId, ref: 'Game', required: true },
  name: String,
  defaultvalue: Number,
  displayname: String,
  hidden: Boolean,
  description: String,
  icon: String,
  icongray: String,
  percent: Number,
});

export default model('GameAchievement', gameAchievementSchema);
