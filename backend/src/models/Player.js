const { Schema, model } = require('mongoose');

const playerSchema = new Schema({
  steamid: { type: String, unique: true, required: true },
  communityvisibilitystate: Number,
  profilestate: Number,
  personaname: String,
  commentpermission: Number,
  profileurl: String,
  avatar: String,
  avatarmedium: String,
  avatarfull: String,
  avatarhash: String,
  lastlogoff: Number,
  personastate: Number,
  realname: String,
  primaryclanid: String,
  timecreated: Number,
  personastateflags: Number,
  loccountrycode: String,
  locstatecode: String,
});

module.exports = model('Player', playerSchema);
