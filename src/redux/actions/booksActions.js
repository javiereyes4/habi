import { services } from "../../services";
import { BOOKS } from "../constants";

export function changeBooks(data) {
  return {
    type: BOOKS,
    payload: data,
  };
}

export const getBooks = () => async (dispatch) => {
  const response = await services.getBooks();
  if (response) {
    dispatch(changeBooks(response));
  }
  return await response;
};
