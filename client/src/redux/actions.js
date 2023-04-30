import axios from "axios";
import {
  CREATE_DOG,
  GET_DOGS,
  GET_DOGS_BY_ID,
  GET_DOGS_BY_NAME,
  GET_TEMPERAMENTS,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
} from "./types";

export const getDogs = (name) => {
  return async function (dispatch) {
    const dogs = await axios.get("http://localhost:3001/dogs");
    const allDogs = dogs.data;
    dispatch({ type: GET_DOGS, payload: allDogs });
  };
};

export const getDogsByName = (name) => {
  return async function (dispatch) {
    const dogs = (await axios.get(`http://localhost:3001/dogs?name=${name}`))
      .data;
    dispatch({ type: GET_DOGS_BY_NAME, payload: dogs });
  };
};

export const getDogsById = (idRaza) => {
  return async function (dispatch) {
    const dog = (await axios.get(`http://localhost:3001/dogs/${idRaza}`)).data;
    dispatch({ type: GET_DOGS_BY_ID, payload: dog });
  };
};

export const createDog = () => {
  return async function (dispatch) {
    const newDog = (await axios.post("http://localhost:3001/dogs")).data;
    dispatch({ type: CREATE_DOG, payload: newDog });
  };
};

export const getTemperaments = () => {
  return async function (dispatch) {
    const temperament = (await axios.get("http://localhost:3001/temperaments"))
      .data;
    dispatch({
      type: GET_TEMPERAMENTS,
      payload: temperament.map((e) => e.name),
    });
  };
};

export function orderByName(name) {
  return {
    type: ORDER_BY_NAME,
    payload: name,
  };
}

export function orderByWeight(weight) {
  return {
    type: ORDER_BY_WEIGHT,
    payload: weight,
  };
}
