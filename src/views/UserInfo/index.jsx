import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { cardTitle, cardLink } from "assets/jss/material-kit-react.js";

import { Link } from "react-router-dom";
const styles = {
  cardTitle,
  cardLink,
};

const useStyles = makeStyles(styles);

const UserInfo = ({ user }) => {
  const classes = useStyles();
  return (
    <div key={user.id} className="user-info">
      <Card style={{ width: "20rem" }}>
        <CardBody>
          <div>
            <table>
              <tr>
                <td>
                  <span>
                    <img
                      src={`https://ui-avatars.com/api/?name=${user.name}&rounded=true`}
                      alt={`${user.name}`}
                    />
                  </span>
                </td>
                <td>
                  <span>
                    <h4 className={classes.cardTitle}>
                      <Link
                        to={`user-info/${user.id}`}
                        className={classes.cardLink}
                      >
                        {user.name}
                      </Link>
                    </h4>
                    <p>{user.email}</p>
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserInfo;
