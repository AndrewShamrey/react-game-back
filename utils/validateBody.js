function validateBody(req) {
  const body = req.body;
  if (!body.name || typeof body.name !== "string") {
    return {message: "Param 'name' is required and should be 'String'"};
  }
  if (!body.bombs || typeof body.bombs !== "number") {
    return {message: "Param 'bombs' is required and should be 'Number'"};
  }
  if (!body.time || typeof body.time !== "number") {
    return {message: "Param 'time' is required and should be 'Number'"};
  }
  if (body.id) {
    delete body.id;
  }
  if (body.date) {
    delete body.id;
  }
  
  return body;
}

module.exports = { validateBody };
