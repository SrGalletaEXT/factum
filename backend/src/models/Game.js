const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
  appid: { type: Number, unique: true, required: true },
  name: String,
  playtime_forever: Number,
  img_icon_url: String,
  has_community_visible_stats: Boolean,
});

module.exports = model('Game', gameSchema);
