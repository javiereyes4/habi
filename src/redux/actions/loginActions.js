import { services } from "../../services";
import { IS_LOGGED } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function changeLogin(data) {
  return {
    type: IS_LOGGED,
    payload: data,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export const postLogin = (body) => async (dispatch) => {
  // const response = await services.postLogin(body);
  if (body) {
    await AsyncStorage.setItem("@storage_Key", JSON.stringify(body));
    dispatch(changeLogin(body));
  }
  return await body;
};
