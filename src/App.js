import React, { useEffect } from "react";
import { CssBaseline } from "@material-ui/core";

import { Switch, Route } from "react-router-dom";
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
import { useHistory } from "react-router-dom";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
  },
});
function App({ checkUserSession }) {
  const history = useHistory();
  useEffect(() => {
    checkUserSession(history);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={OrderScreen} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/checkout" component={Checkout} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <CssBaseline />
    </ThemeProvider>
  );
}

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: (history) => dispatch(checkUserSession({ history })),
});
export default connect(null, mapDispatchToProps)(App);
