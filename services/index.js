const Gamer = require('../models/gamer');

exports.createGamer = async function ({ name, body } = {}) {
  const gamer = new Gamer({ name, body });
  return gamer.save();
}

exports.getGamers = async function (query) {
  let allGamers = [];
  const cursor = Gamer.find({ _deletedAt: null }).select('_id name body').cursor();
  for (let doc = await cursor.next(); ; doc = await cursor.next()) {
    if (doc == null) return allGamers;
    allGamers.push({ id: doc._id, name: doc.name, ...doc.body });
  }
}

exports.getGamer = async function (name) {
  let currentGamer = [];
  const cursor = Gamer.find({ _deletedAt: null, name: name }).select('_id name body').cursor();
  for (let doc = await cursor.next(); ; doc = await cursor.next()) {
    if (doc == null) return currentGamer;
    currentGamer.push({ id: doc._id, name: doc.name, ...doc.body });
  }
}

exports.updateGamer = async function (id, { name, body, _deletedAt }) {
  const valuesToUpdate = { name, body, _deletedAt };
  const newObject = {};
  for (let key in valuesToUpdate) {
    console.log(valuesToUpdate[key], newObject);
    if (valuesToUpdate[key] !== undefined) {
      newObject[key] = valuesToUpdate[key];
    }

    console.log(valuesToUpdate[key], newObject);
  }
  return await Gamer.updateOne({ _id: id }, newObject);
}

exports.deleteGamer = async function (id) {
  return await exports.updateGamer(id, { _deletedAt: Date.now() });
};
