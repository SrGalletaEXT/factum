import { Schema, model, Types } from 'mongoose';

const playerGameSchema = new Schema({
  player: { type: Types.ObjectId, ref: 'Player', required: true },
  game: { type: Types.ObjectId, ref: 'Game', required: true },
});

playerGameSchema.index({ player: 1, game: 1 }, { unique: true });

export default model('PlayerGame', playerGameSchema);
