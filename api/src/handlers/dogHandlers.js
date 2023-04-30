const {
  getDogsByName,
  getAllDogs,
  getDogsById,
  postDogs,
} = require("../controllers/dogsControllers");

const getDogsHandlers = async (req, res) => {
  const { name } = req.query;
  try {
    let dogs;
    name ? (dogs = await getDogsByName(name)) : (dogs = await getAllDogs());
    if (dogs.length > 0) res.status(200).json(dogs);
    else throw new Error("La raza que busca no existe");
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
      throw new Error("Faltan datos");
    res
      .status(200)
      .json(
        await postDogs(image, name, height, weight, life_span, temperament)
      );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDogsHandlers,
  getDogsByIdHandlers,
  postDogsHandlers,
};
