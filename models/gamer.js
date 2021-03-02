const { Schema, model } = require('mongoose');

const gamerSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: Number, required: true },
  bombs: { type: Number, required: true },
  _deletedAt: { type: Date, default: null, select: false },
});

module.exports = model('gamer', gamerSchema);
