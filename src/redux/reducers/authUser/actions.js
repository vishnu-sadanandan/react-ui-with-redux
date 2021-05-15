import {
  GET_USER,
  FETCH_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
} from "./actionTypes";
export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: { user },
});
export const logoutUserSuccess = (user) => ({
  type: LOGOUT_USER_SUCCESS,
  payload: {},
});

export const getUser = () => ({
  type: GET_USER,
});
