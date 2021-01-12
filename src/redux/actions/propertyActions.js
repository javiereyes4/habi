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

export const getPropertys = () => async (dispatch) => {
  const response = Object.values(await services.getProperty());
  if (response) {
    dispatch(postProperty(response));
  }
  return await response;
};
