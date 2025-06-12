const { Schema, model } = require('mongoose');

const gameDetailSchema = new Schema({
  appid: { type: Number, unique: true, required: true },
  name: String,
  type: String,
  required_age: String,
  is_free: Boolean,
  detailed_description: String,
  about_the_game: String,
  short_description: String,
  supported_languages: String,
  reviews: String,
  header_image: String,
  website: String,
  developers: [String],
  publishers: [String],
  price_currency: String,
  price_initial: Number,
  price_final: Number,
  discount_percent: Number,
  platforms_windows: Boolean,
  platforms_mac: Boolean,
  platforms_linux: Boolean,
  metacritic_score: Number,
  metacritic_url: String,
  release_date: String,
  support_url: String,
  support_email: String,
});

module.exports = model('GameDetail', gameDetailSchema);
