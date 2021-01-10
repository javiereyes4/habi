import { USER } from "../constants";
import initialState from "../store/initialState";

const userReducer = (state = initialState.user || {}, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
