const { Schema, model, Types } = require('mongoose');

const friendSchema = new Schema({
  player: { type: Types.ObjectId, ref: 'Player', required: true },
  friend_steamid: String,
  relationship: String,
  friend_since: Number,
});

module.exports = model('Friend', friendSchema);
