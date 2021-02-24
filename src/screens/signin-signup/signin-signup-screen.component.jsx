import React from "react";
import "./signin-signup-screen.styles.scss";
import Signin from "../../components/signin/signin.component";
import Signup from "../../components/signup/signup.component";
const SigninSignupScreen = () => {
  return (
    <div className="signin-and-signup">
      <Signin />
      <Signup />
    </div>
  );
};

export default SigninSignupScreen;
