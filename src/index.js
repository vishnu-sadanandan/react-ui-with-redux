import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

import { Provider } from "react-redux";
import store from "./redux/store";

// pages for this product
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import Home from "views/Home";

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/user-info/:userId" component={ProfilePage} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
