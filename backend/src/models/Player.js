import { Schema, model } from 'mongoose';

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

export default model('Player', playerSchema);
