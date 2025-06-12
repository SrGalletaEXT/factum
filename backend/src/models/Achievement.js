const { Schema, model, Types } = require('mongoose');

const achievementSchema = new Schema({
  game: { type: Types.ObjectId, ref: 'Game', required: true },
  apiname: String,
  achieved: Boolean,
  unlocktime: Number,
  points: Number,
});

module.exports = model('Achievement', achievementSchema);
