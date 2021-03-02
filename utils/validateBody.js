function validateBody(req, res, next) {
  const body = req.body;
  if (!body.name || typeof body.name !== "string") {
    return res.status(400).send("Param 'name' is required and should be 'String'");
  }
  if (!body.bombs || typeof body.bombs !== "string") {
    return res.status(400).send("Param 'bombs' is required and should be 'String'");
  }
  if (!body.time || typeof body.time !== "string") {
    return res.status(400).send("Param 'time' is required and should be 'String'");
  }

  next();
}

module.exports = { validateBody };
