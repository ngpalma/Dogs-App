const {
  getDogsByName,
  getAllDogs,
  getDogsById,
  postDogs,
} = require("../controllers/dogsControllers");

const getDogsHandlers = async (req, res) => {
  const { name } = req.query;
  try {
    name
      ? res.status(200).json(await getDogsByName(name))
      : res.status(200).json(await getAllDogs());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDogsByIdHandlers = async (req, res) => {
  const { idRaza } = req.params;
  try {
    res.status(200).json(await getDogsById(idRaza));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postDogsHandlers = async (req, res) => {
  const { image, name, height, weight, life_span, temperament } = req.body;
  try {
    if (![name, height, weight, life_span, temperament].every(Boolean))
      throw Error("Faltan datos");
    res
      .status(200)
      .json(await postDogs(image, name, height, weight, life_span, temperament));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDogsHandlers,
  getDogsByIdHandlers,
  postDogsHandlers,
};
