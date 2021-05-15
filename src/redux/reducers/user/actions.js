import { GET_USERS, FETCH_USERS_SUCCESS } from "./actionTypes";
export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users },
});

export const getUsers = () => ({
  type: GET_USERS,
});
