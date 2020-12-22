import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchUsersSuccess } from "../../redux/actions";

import UserInfo from "../UserInfo";

const User = () => {
  const UseDispatch = useDispatch();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUser] = useState([]);

  const fetchUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUser(result);
          UseDispatch(fetchUsersSuccess(result));
        },
        (err) => {
          setIsLoaded(false);
          setError(err);
        }
      );
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {users && isLoaded && <h3>Users</h3>}

      {users &&
        isLoaded &&
        users.map((user) => {
          return <UserInfo key={user.id} user={user} />;
        })}
    </div>
  );
};

export default connect(null, { fetchUsersSuccess })(User);
