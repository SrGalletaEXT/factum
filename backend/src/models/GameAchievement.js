const { Schema, model, Types } = require('mongoose');

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

module.exports = model('GameAchievement', gameAchievementSchema);
