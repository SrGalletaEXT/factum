const { Schema, model, Types } = require('mongoose');

const playerGameSchema = new Schema({
  player: { type: Types.ObjectId, ref: 'Player', required: true },
  game: { type: Types.ObjectId, ref: 'Game', required: true },
});

playerGameSchema.index({ player: 1, game: 1 }, { unique: true });

module.exports = model('PlayerGame', playerGameSchema);
