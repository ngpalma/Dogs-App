import { GET_DOGS, GET_DOGS_BY_ID } from "./types";

const initialState = {
  dogs: [],
  dog: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  //action: {type, payload}
  switch (type) {
    case GET_DOGS:
      return { ...state, dogs: payload };
    case GET_DOGS_BY_ID:
      const updatedDogs = state.dogs.map((dog) =>
        dog.id === payload.id ? payload : dog
      );
      return { ...state, dogs: updatedDogs };

    // case GET_DOGS_BY_ID:
    //   return { ...state, dogs: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
