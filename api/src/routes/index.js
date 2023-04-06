const { Router } = require("express");
// Importar todos los routers;
const dogsRoutes = require("./dogsRoutes");
const temperamentRoutes = require("./temperamentRoutes");

const router = Router();

// Configurar los routers
router.use("/dogs", dogsRoutes);
router.use("/temperaments", temperamentRoutes);

module.exports = router;
