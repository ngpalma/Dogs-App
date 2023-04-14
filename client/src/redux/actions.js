import axios from "axios";
import { GET_DOGS, GET_DOGS_BY_ID } from "./types";

export const getDogs = () => {
  return async function (dispatch) {
    const dogs = await axios.get("http://localhost:3001/dogs");
    const allDogs = dogs.data;
    dispatch({ type: GET_DOGS, payload: allDogs });
  };
};

export const getDogsById = (idRaza) => {
  return async function (dispatch) {
    const dog = (await axios.get(`http://localhost:3001/dogs/${idRaza}`)).data;
    dispatch({ type: GET_DOGS_BY_ID, payload: dog });
  };
};
