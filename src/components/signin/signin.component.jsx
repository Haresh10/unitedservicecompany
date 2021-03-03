import React, { useState, useRef, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import googleSignin from "../../assets/google_signin.png";
import facebookSignin from "../../assets/facebook_signin.png";
import { useStyles, Copyright } from "./signin.styles";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";
import { Link } from "react-router-dom";

const Signin = (props) => {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState({ email: "", password: "" });
  const { googleSignInStart, emailSignInStart, history, location } = props;
  const routeRef = useRef(location.pathname);
  useEffect(() => {
    routeRef.current = location.state ? location.state.from : location.pathname;
  }, [currentUser]);
  //handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = currentUser;
    await emailSignInStart(email, password, history, routeRef.current);
    setCurrentUser({ email: "", password: "" });
  };
  //handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };
  const { email, password } = currentUser;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <div>
          <img
            src={facebookSignin}
            type="button"
            alt="facebookSignin"
            className={classes.facebookSignin}
          />
          <img
            src={googleSignin}
            type="button"
            alt="googleSignin"
            onClick={() => googleSignInStart(history, routeRef.current)}
            className={classes.googleSignin}
          />
        </div>
        <Typography variant="body2" color="textSecondary" align="center">
          All your activity will remain private.
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          --------------------------------<strong>or</strong>
          ---------------------------------
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2" className={classes.link}>
                Don't have an account? <strong>Sign Up</strong>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: (history, from) =>
    dispatch(googleSignInStart({ history, from })),
  emailSignInStart: (email, password, history, from) =>
    dispatch(emailSignInStart({ email, password, history, from })),
});
export default connect(null, mapDispatchToProps)(Signin);
