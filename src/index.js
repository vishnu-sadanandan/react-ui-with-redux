import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { getUserState } from "./redux/reducers/authUser/selectors";

import "assets/scss/material-kit-react.scss?v=1.9.0";

import { Provider } from "react-redux";
import store from "./redux/store";

// pages for this product
import Login from "views/Login/index";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import Home from "views/Home";

const userDump = {
  user: {
    id: 1,
    isLoggedIn: true,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
};
const useDummyAdmin = false;

var hist = createBrowserHistory();
const state = store.getState();
const authUser = useDummyAdmin ? userDump : getUserState(state);
const isUserAuthenticated =
  (authUser && authUser?.user && authUser?.user?.isLoggedIn) || false;
console.log(authUser);
ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/user-info/:userId" component={ProfilePage} />
        {<Route path="/home" component={Home} />}
        {<Route path="/login" component={Login} />}
        {/* {!isUserAuthenticated && <Redirect to="/login" />} */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
