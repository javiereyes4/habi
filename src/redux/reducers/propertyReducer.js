import { PROPERTY } from "../constants";
import initialState from "../store/initialState";

const propertyReducer = (state = initialState.property || {}, action) => {
  switch (action.type) {
    case PROPERTY:
      return {
        ...state,
        property: action.payload,
      };
    default:
      return state;
  }
};
export default propertyReducer;
