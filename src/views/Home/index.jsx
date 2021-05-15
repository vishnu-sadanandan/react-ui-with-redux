import React from "react";
import User from "../User";
import Header from "../Header";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const authUser = useSelector((state) => state.user);
  const isUserAuthenticated =
    (authUser && authUser?.user && authUser?.user?.isLoggedIn) || false;
  // if (!isUserAuthenticated) {
  //   history.push("/login");
  // }
  return (
    <div>
      <Header />
      <User />
    </div>
  );
};

export default Home;
