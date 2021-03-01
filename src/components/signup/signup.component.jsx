import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Copyright, useStyles } from "./signup.styles";

import { signUpStart } from "../../redux/user/user.actions";

const Signup = (props) => {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { signUpStart, history } = props;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = currentUser;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    signUpStart(email, password, displayName, history);

    setCurrentUser({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };
  const { displayName, email, password, confirmPassword } = currentUser;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            id="displayName"
            name="displayName"
            label="Display Name"
            value={displayName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            autoComplete="email"
            onChange={handleChange}
            autoFocus
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
            value={password}
            onChange={handleChange}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box align="center">
        <Link to="/" variant="body2" className={classes.link}>
          Already have an account? <strong>SignIn</strong>
        </Link>
      </Box>
      <Box mt={2}>
        <Copyright />
      </Box>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName, history) =>
    dispatch(signUpStart({ email, password, displayName, history })),
});
export default connect(null, mapDispatchToProps)(Signup);
