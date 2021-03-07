import React, { useEffect, useRef } from "react";
import { CssBaseline } from "@material-ui/core";

import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import "./App.css";
import { checkUserSession } from "./redux/user/user.actions";
import Header from "./components/header/header.component";
import OrderScreen from "./screens/order-screen/order-screen.component";
import Signin from "./components/signin/signin.component";
import Signup from "./components/signup/signup.component";
import Checkout from "./components/checkout/checkout.component";
import PageNotFound from "./components/page-not-found/pagenotfound.component";
import PrivateRoute from "./components/private-route/private-route.component";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { SelectCurrentUser } from "./redux/user/user.selectors";
import ResetPassword from "./screens/reset-password/reset-password.component";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#115293",
      light: "#3c44b126",
    },
  },
});
function App({ checkUserSession, currentUser }) {
  const locationPathNameRef = useRef();
  const history = useHistory();
  const location = useLocation();
  locationPathNameRef.current = location.state ? location.state.from : "/";
  useEffect(() => {
    checkUserSession(history, locationPathNameRef.current);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <PrivateRoute
          exact
          path="/"
          component={OrderScreen}
          currentUser={currentUser}
        />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/recoverAccount" component={ResetPassword} />
        <PrivateRoute
          path="/checkout"
          component={Checkout}
          currentUser={currentUser}
        />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <CssBaseline />
    </ThemeProvider>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: (history, from) =>
    dispatch(checkUserSession({ history, from })),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
