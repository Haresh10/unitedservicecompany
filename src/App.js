import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";
import { SelectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import Header from "./components/header/header.component";
import OrderScreen from "./screens/order-screen/order-screen.component";
import SigninSignupScreen from "./screens/signin-signup/signin-signup-screen.component";

function App({ checkUserSession }) {
  useEffect(() => {
    checkUserSession();
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={SigninSignupScreen} />
        <Route path="/order" component={OrderScreen} />
      </Switch>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
