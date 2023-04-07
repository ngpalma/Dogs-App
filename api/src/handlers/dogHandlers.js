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
  const source = isNaN(idRaza) ? "BDD" : "API";
  try {
    res.status(200).json(await getDogsById(idRaza, source));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postDogsHandlers = async (req, res) => {
  const { image, name, height, weight, life_span } = req.body;
  try {
    if (![image, name, height, weight, life_span].every(Boolean))
      throw Error("Faltan datos");
    res
      .status(200)
      .json(await postDogs(image, name, height, weight, life_span));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDogsHandlers,
  getDogsByIdHandlers,
  postDogsHandlers,
};

// {
//   "weight": {
//      "imperial": "6 - 13",
//      "metric": "3 - 6"
//      },
//   "height": {
//      "imperial": "9 - 11.5",
//      "metric": "23 - 29"
//      },
//   "id": 1,
//   "name": "Affenpinscher",
//   "bred_for": "Small rodent hunting, lapdog",
//   "breed_group": "Toy",
//   "life_span": "10 - 12 years",
//   "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
//   "origin": "Germany, France",
//   "reference_image_id": "BJa4kxc4X",
//   "image": {
//      "id": "BJa4kxc4X",
//      "width": 1600,
//      "height": 1199,
//      "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
//      }
// },
