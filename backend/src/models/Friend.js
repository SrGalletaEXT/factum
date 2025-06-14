import { Schema, model, Types } from 'mongoose';

const friendSchema = new Schema({
  player: { type: Types.ObjectId, ref: 'Player', required: true },
  friend_steamid: String,
  relationship: String,
  friend_since: Number,
});

export default model('Friend', friendSchema);
