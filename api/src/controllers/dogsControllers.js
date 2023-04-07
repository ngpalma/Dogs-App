const axios = require("axios");
const { Dog, Temperament } = require("../db");

const { API_KEY } = process.env;
const API_URL = "https://api.thedogapi.com/v1/breeds";

const mapDogs = (arr) =>
  arr.map((ele) => {
    return {
      id: ele.id,
      image: ele.image.url,
      name: ele.name,
      height: ele.height.metric,
      weight: ele.weight.metric,
      life_span: ele.life_span,
      created: false,
    };
  });

const getAllDogs = async () => {
  const dogsApi = (await axios.get(`${API_URL}?${API_KEY}`)).data;
  const dogsDatabase = await Dog.findAll();
  const newDogsApi = mapDogs(dogsApi);
  return [...newDogsApi, ...dogsDatabase];
};
const getDogsByName = async (name) => {
  const dogsApi = (await axios.get(`${API_URL}?${API_KEY}`)).data;
  const dogsDatabase = await Dog.findAll({ where: { name } });
  const newDogsApi = mapDogs(dogsApi);
  const newDogsApiFiltered = newDogsApi.filter((ele) => ele.name === name);
  return [...newDogsApiFiltered, ...dogsDatabase];
};
const getDogsById = async (idRaza, source) => {
  if (source === "API") {
    const dogsApi = (await axios.get(`${API_URL}?${API_KEY}`)).data;
    const newDogsApi = mapDogs(dogsApi);
    const newDogsApiFiltered = newDogsApi.filter((ele) => ele.id == idRaza);
    return newDogsApiFiltered;
  } else {
    return Dog.findByPk(idRaza, {
      include: {
        model: Temperament,
      },
    });
  }
};
const postDogs = async (image, name, height, weight, life_span) => {
  return Dog.create({image, name, height, weight, life_span});
};

module.exports = { getAllDogs, getDogsById, postDogs, getDogsByName };
