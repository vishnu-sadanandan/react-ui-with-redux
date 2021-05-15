import {
  GET_USER,
  FETCH_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
} from "./actionTypes";

const initialState = {
  user: {},
  isUsersLoaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS: {
      const { user } = action.payload;
      return {
        ...state,
        user: user,
        isUsersLoaded: true,
      };
    }
    case LOGOUT_USER_SUCCESS: {
      const { user } = action.payload;
      return {
        ...state,
        user: {},
        isUsersLoaded: true,
      };
    }
    case GET_USER: {
      return state.user;
    }
    default:
      return state;
  }
}
