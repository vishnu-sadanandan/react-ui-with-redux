import { GET_USERS, FETCH_USERS_SUCCESS } from "../actionTypes";

const initialState = {
  users: [],
  isUsersLoaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS: {
      const users = action.payload;
      return {
        ...state,
        users: users,
        isUsersLoaded: true,
      };
    }
    case GET_USERS: {
      return state.users;
    }
    default:
      return state;
  }
}
