import { services } from "../../services";
import { PROPERTY } from "../constants";

export function postProperty(data) {
  return {
    type: PROPERTY,
    payload: data,
  };
}

export const postPropertys = (body) => (dispatch) => {
  const response = services.postProperty(body);
  if (response) {
    dispatch(postProperty(response));
  }
  return response;
};
