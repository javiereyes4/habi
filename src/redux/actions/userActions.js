import { services } from "../../services";
import { USER } from "../constants";

export function postUser(data) {
  return {
    type: USER,
    payload: data,
  };
}

export const postUsers = (body) => async (dispatch) => {
  const response = await services.postUser(body);
  let responseArr = {
    id: response.name,
    ...body,
  };
  if (response) {
    dispatch(postUser(responseArr));
  }
  return await responseArr;
};
