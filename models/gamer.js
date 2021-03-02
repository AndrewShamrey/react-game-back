const { Schema, model } = require('mongoose');

const gamerSchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  bombs: { type: String, required: true },
  _deletedAt: { type: Date, default: null, select: false },
});

module.exports = model('gamer', gamerSchema);
