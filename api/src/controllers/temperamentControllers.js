const axios = require("axios");
const { Temperament } = require("../db");
const { API_KEY } = process.env;
const API_URL = "https://api.thedogapi.com/v1/breeds";

const getTemperaments = async () => {
  const allDogs = (await axios.get(`${API_URL}?${API_KEY}`)).data
    .map((dog) => dog.temperament)
    .toString()
    .split(",")
    .map((temp) => temp.trim());
  const uniqueArray = allDogs.filter((value, index) => {
    return value !== "" && allDogs.indexOf(value) === index;
  });

  for (const temp of uniqueArray) {
    await Temperament.create({
      name: temp,
    });
  }

  const temps = Temperament.findAll();
  return temps;
};

module.exports = { getTemperaments };
