const { getTemperaments } = require("../controllers/temperamentControllers");

const getTemperamentsHandlers = async (req, res) => {
  try {
    res.status(200).json(await getTemperaments());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const getDogsHandlers = async (req, res) => {
//   const { name } = req.query;
//   try {
//     name
//       ? res.status(200).json(await getDogsByName(name))
//       : res.status(200).json(await getAllDogs());
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

module.exports = { getTemperamentsHandlers };
