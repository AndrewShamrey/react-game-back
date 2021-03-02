const Gamer = require('../models/gamer');

exports.createGamer = async function ({ name, time, bombs } = {}) {
  const newDate = new Date();
  const date = newDate.toLocaleString();
  const gamer = new Gamer({ name, date, time, bombs });
  return gamer.save();
}

exports.getGamers = async function () {
  let allGamers = [];
  const cursor = Gamer.find({ _deletedAt: null }).select('_id name date time bombs').cursor();
  for (let doc = await cursor.next(); ; doc = await cursor.next()) {
    if (doc == null) return allGamers;
    allGamers.push(doc);
  }
}

exports.getGamer = async function (name) {
  let currentGamer = [];
  const cursor = Gamer.find({ _deletedAt: null, name: name }).select('_id name date time bombs').cursor();
  for (let doc = await cursor.next(); ; doc = await cursor.next()) {
    if (doc == null) return currentGamer;
    currentGamer.push(doc);
  }
}

exports.updateGamer = async function ({ id, name, date, time, bombs, _deletedAt }) {
  const valuesToUpdate = { name, date, time, bombs, _deletedAt };
  const newObject = {};
  for (let key in valuesToUpdate) {
    if (valuesToUpdate[key] !== undefined) {
      newObject[key] = valuesToUpdate[key];
    }
  }
  return await Gamer.updateOne({ _id: id }, newObject);
}

exports.deleteGamer = async function (id) {
  return await exports.updateGamer({ id, _deletedAt: Date.now() });
};
