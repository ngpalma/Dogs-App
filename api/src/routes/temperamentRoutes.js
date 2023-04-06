const { Router } = require("express");
const temperamentRoutes = Router();
const { getTemperamentsHandlers } = require("../handlers/temperamentHandlers");

temperamentRoutes.get("/", getTemperamentsHandlers);

module.exports = temperamentRoutes;
