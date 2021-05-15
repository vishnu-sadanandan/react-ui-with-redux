import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { fetchUserSuccess } from "../../redux/reducers/authUser/actions";
import { useSelector, connect } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const history = useHistory();
  const UseDispatch = useDispatch();
  const authUser = useSelector((state) => state.user);
  const [isUserAuthenticated, setUserAuth] = useState(
    (authUser && authUser?.user && authUser?.user?.isLoggedIn) || false
  );

  const classes = useStyles();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isUserNameError, setUserNameError] = useState(false);
  const [isPasswordError, setPasswordError] = useState(false);

  const fetchUser = () => {
    fetch("./server/user.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          const getUserName = result.username;
          const getPassowrd = result.password;
          if (username && password) {
            if (username !== getUserName) setUserNameError(true);
            if (password !== getPassowrd) setPasswordError(true);
            if (username === getUserName) setUserNameError(false);
            if (password === getPassowrd) setPasswordError(false);

            if (
              username &&
              password &&
              getUserName &&
              getPassowrd &&
              username === getUserName &&
              password === getPassowrd
            ) {
              const user = { ...result, isLoggedIn: true };
              UseDispatch(fetchUserSuccess(user));
              setUserAuth(true);
              history.push("/home");
              console.log("Pushed");
            }
          } else {
            setUserNameError(true);
            setPasswordError(true);
          }
        },
        (err) => {}
      );
  };

  const onSubmitLoginForm = (e) => {
    fetchUser();
    e.preventDefault();
  };
  const handleChange = (e) => {
    if (e.currentTarget.id === "username") setUserName(e.currentTarget.value);
    if (e.currentTarget.id === "password") setPassword(e.currentTarget.value);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              onChange={handleChange}
              error={isUserNameError}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              error={isPasswordError}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onSubmitLoginForm}
            >
              Sign In
            </Button>
          </form>
        </div>
      }
    </Container>
  );
};

export default connect(null, { fetchUserSuccess })(Login);
