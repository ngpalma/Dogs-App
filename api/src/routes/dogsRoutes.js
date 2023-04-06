const { Router } = require("express");
const dogsRoutes = Router();
const {
  getDogsHandlers,
  getDogsByIdHandlers,
  getDogsByNameHandlers,
  postDogsHandlers,
} = require("../handlers/dogHandlers");

dogsRoutes.get("/", getDogsHandlers);
dogsRoutes.get("/:idRaza", getDogsByIdHandlers);
dogsRoutes.get("/name", getDogsByNameHandlers);
dogsRoutes.post("/", postDogsHandlers);

module.exports = dogsRoutes;
