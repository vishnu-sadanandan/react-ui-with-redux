import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

import { useParams } from "react-router-dom";
import { getUsersById, getUsersList } from "../../redux/selectors";
import { useSelector } from "react-redux";

const useStyles = makeStyles(styles);

const ProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(
    useSelector((state) => getUsersById(state, userId))
  );

  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const fetchUser = (id) => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((result) => {
          setUser(result);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user && userId) {
      // Trying to reload the page!
      fetchUser(userId);
    }
  }, []);

  return (
    <div>
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      {user && (
        <div>
          <div>
            <div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{user.name}</h3>
                      <p>{user?.address?.street}</p>
                      <p>{user?.address?.suite}</p>
                      <p>{user?.address?.city}</p>
                      <p>Zip:{user?.address?.zipcode}</p>

                      <p>Phone:{user?.phone}</p>
                      <p>Website:{user?.website}</p>
                      <p>Company:{user?.company?.name}</p>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      )}
      {!user && "No users found"}
    </div>
  );
};

export default ProfilePage;
