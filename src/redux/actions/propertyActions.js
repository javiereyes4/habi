import { services } from "../../services";
import { PROPERTY, USER } from "../constants";

export function postProperty(data) {
  return {
    type: PROPERTY,
    payload: data,
  };
}

export function user(data) {
  return {
    type: USER,
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

export const getUsersRegisters = () => async (dispatch) => {
  const response = Object.values(await services.getUsersRegister());
  if (response) {
    dispatch(user(response));
  }
  return await response;
};
