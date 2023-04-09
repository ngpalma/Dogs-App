const { getTemperaments } = require("../controllers/temperamentControllers");

const getTemperamentsHandlers = async (req, res) => {
  try {
    res.status(200).json(await getTemperaments());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getTemperamentsHandlers };
