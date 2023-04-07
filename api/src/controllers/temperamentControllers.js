const axios = require("axios");
const { Temperament } = require("../db");
// const { Temperament } = require("../db");
const { API_KEY } = process.env;
const API_URL = "https://api.thedogapi.com/v1/breeds";

const getTemperaments = async () => {
  const temperaments = (await axios.get(`${API_URL}?${API_KEY}`)).data;
  const temperamentsMap = temperaments.map((dog) => {
    return {
      id: dog.id,
      name: dog.temperament,
    };
  });
  temperamentsMap.forEach((elem) => {
    Temperament.create(elem);
  });
  return temperamentsMap;
};

// const getAllDogs = async () => {
//     const dogsApi = (await axios.get(`${API_URL}?${API_KEY}`)).data;
//     const dogsDatabase = await Dog.findAll();
//     const newDogsApi = mapDogs(dogsApi);
//     return [...newDogsApi, ...dogsDatabase];
//   };

module.exports = { getTemperaments };
