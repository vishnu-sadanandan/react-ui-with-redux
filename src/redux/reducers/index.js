import { combineReducers } from "redux";
import users from "./user/users";
import user from "./authUser/users";

export default combineReducers({ users, user });
