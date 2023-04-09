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
  // const mapeo = allDogs
  //   .map((dog) => dog.temperament)
  //   .toString()
  //   .split(",");
  // const cadena = mapeo.toString().split(",");
  // const arreglo = cadena.split(",");
  // const mapping = allDogs.map((temp) => temp.trim());
  const uniqueArray = allDogs.filter((value, index) => {
    return value !== "" && allDogs.indexOf(value) === index;
  });
  await uniqueArray.forEach((temp) => Temperament.create({ name: temp }));
  return uniqueArray;
};

module.exports = { getTemperaments };
