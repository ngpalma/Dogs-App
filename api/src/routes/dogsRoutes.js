const { Router } = require("express");
const dogsRoutes = Router();
const {
  getDogsHandlers,
  getDogsByIdHandlers,
  postDogsHandlers,
} = require("../handlers/dogHandlers");

dogsRoutes.get("/", getDogsHandlers);
dogsRoutes.get("/:idRaza", getDogsByIdHandlers);
dogsRoutes.post("/", postDogsHandlers);

module.exports = dogsRoutes;
