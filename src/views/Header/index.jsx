import React from "react";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { useDispatch, connect } from "react-redux";
import { logoutUserSuccess } from "../../redux/reducers/authUser/actions";
import { useHistory } from "react-router-dom";

const Header = () => {
  const authUser = useSelector((state) => state.user);
  const isUserAuthenticated =
    (authUser && authUser?.user && authUser?.user?.isLoggedIn) || false;
  const UseDispatch = useDispatch();
  const history = useHistory();

  const onLogout = () => {
    // UseDispatch(logoutUserSuccess({}));
    // history.push("/login");
  };

  return isUserAuthenticated ? (
    <Button variant="contained" color="primary" onClick={onLogout()}>
      Logout
    </Button>
  ) : null;
};
export default Header;
