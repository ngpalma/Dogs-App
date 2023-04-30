const { Router } = require("express");

const dogsRoutes = require("./dogsRoutes");
const temperamentRoutes = require("./temperamentRoutes");

const router = Router();

router.use("/dogs", dogsRoutes);
router.use("/temperaments", temperamentRoutes);

module.exports = router;
