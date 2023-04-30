import {
  CREATE_DOG,
  GET_DOGS,
  GET_DOGS_BY_ID,
  GET_TEMPERAMENTS,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  GET_DOGS_BY_NAME,
} from "./types";

const initialState = {
  dogs: [],
  dogDetail: {},
  temperaments: [],
  dogsByName: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOGS:
      return { ...state, dogs: payload };
    case GET_DOGS_BY_ID:
      return { ...state, dogDetail: payload };
    case GET_DOGS_BY_NAME:
      return { ...state, dogsByName: payload };
    case CREATE_DOG:
      return { ...state, dogDetail: payload };
    case GET_TEMPERAMENTS:
      return { ...state, temperaments: payload };
    case ORDER_BY_NAME:
      const copyDogs = [...state.dogs];
      const sortOrderByName = copyDogs.sort((a, b) => {
        if (a.name > b.name) {
          return payload === "Nombre Ascendente" ? 1 : -1;
        }
        if (a.name < b.name) {
          return payload === "Nombre Ascendente" ? -1 : 1;
        } else return 0;
      });
      return { ...state, dogs: sortOrderByName };
    case ORDER_BY_WEIGHT:
      const copyDog = [...state.dogs];
      const sortOrderByWeight = copyDog.sort((a, b) => {
        if (a.weight > b.weight) {
          return payload === "Peso Menor" ? 1 : -1;
        }
        if (a.weight < b.weight) {
          return payload === "Peso Menor" ? -1 : 1;
        } else return 0;
      });
      return { ...state, dogs: sortOrderByWeight };
    default:
      return { ...state };
  }
};

export default rootReducer;
