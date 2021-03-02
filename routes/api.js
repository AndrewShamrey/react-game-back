const { Router } = require("express");

const {
  createGamer,
  getGamers,
  getGamer,
  updateGamer,
  deleteGamer
} = require('../services');

const { validateBody } = require('../utils/validateBody');

const api = Router();

api.get("/gamers", (req, res) => {
  getGamers()
    .then(gamers => res.json(gamers))
    .catch((err) => {
      res.status(500);
      res.end("Access failed");
    });
});

api.get("/gamers/:name", (req, res) => {
  const name = req.params.name;
  getGamer(name)
    .then(gamer => res.json(gamer))
    .catch(err => {
      res.status(404);
      res.end("Not found!");
    });
});

api.post("/gamers", validateBody, (req, res) => {
  const newGamer = req.body;
  if (newGamer.id) {
    delete body.id;
  }
  if (newGamer.date) {
    delete body.id;
  }
  createGamer(newGamer)
    .then(() => {
      res.status(201);
      res.end("New gamer was added!");
    })
    .catch((err) => {
      console.log(err)
      res.status(500);
      res.end("Access failed");
    });
});

api.put("/gamers/:id", validateBody, (req, res) => {
  const id = req.params.id;
  const newGamer = req.body;
  if (newGamer.id) {
    delete body.id;
  }
  if (newGamer.date) {
    delete body.id;
  }
  updateGamer(id, newGamer)
    .then(() => {
      res.status(200);
      res.end("Resource updated successfully!");
    })
    .catch((err) => {
      res.status(500);
      res.end("Access failed");
    });
});

api.delete("/gamers/:id", (req, res) => {
  const id = req.params.id;
  deleteGamer(id)
    .then(() => {
      res.status(200);
      res.end("Resource deleted successfully!");
    })
    .catch((err) => {
      res.status(500);
      res.end("Access failed");
    });     
});

module.exports = api;
