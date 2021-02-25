import React, { useEffect } from "react";
import "./signin-signup-screen.styles.scss";
import Signin from "../../components/signin/signin.component";
import Signup from "../../components/signup/signup.component";
import { SelectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
const SigninSignupScreen = ({ currentUser, match, history }) => {
  useEffect(() => {
    if (currentUser) {
      history.push("/order");
    }
  }, [currentUser]);
  return (
    <div className="signin-and-signup">
      <Signin />
      <Signup />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
});
export default connect(mapStateToProps)(SigninSignupScreen);
