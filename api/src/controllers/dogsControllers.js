const axios = require("axios");
const { Dog } = require("../db");

const { API_KEY, API_URL } = process.env;

const mapDogs = (arr) =>
  arr.map((ele) => {
    return {
      id: ele.id,
      image: ele.image.url,
      name: ele.name,
      height: ele.height.metric,
      weight: ele.weight.metric,
      life_span: ele.life_span,
      temperament: ele.temperament,
      created: false,
    };
  });

const getAllDogs = async () => {
  const dogsApi = (await axios.get(`${API_URL}?${API_KEY}`)).data;
  const dogsDatabase = await Dog.findAll();
  const newDogsApi = mapDogs(dogsApi);
  return [...dogsDatabase, ...newDogsApi];
};
const getDogsByName = async (name) => {
  const newDogsApi = await getAllDogs();
  const newDogsApiFiltered = newDogsApi.filter((ele) => ele.name === name);
  return newDogsApiFiltered;
};
const getDogsById = async (idRaza) => {
  const newDogsApi = await getAllDogs();
  const newDogsApiFiltered = newDogsApi.find((ele) => ele.id == idRaza);
  return newDogsApiFiltered;
};

const postDogs = async (
  image,
  name,
  height,
  weight,
  life_span,
  temperament
) => {
  return await Dog.create({
    image,
    name,
    height,
    weight,
    life_span,
    temperament,
  });
};

module.exports = { getAllDogs, getDogsById, postDogs, getDogsByName };
