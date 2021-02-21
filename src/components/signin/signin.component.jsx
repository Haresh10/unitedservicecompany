import React, { useState } from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custombutton.component";
import FormInput from "../form-input/forminput.component";
import "./signin.styles.scss";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";

const Signin = (props) => {
  const [currentUser, setCurrentUser] = useState({ email: "", password: "" });
  const { googleSignInStart } = props;
  //handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = currentUser;
    const { emailSignInStart } = props;
    emailSignInStart(email, password);
    setCurrentUser({ email: "", password: "" });
  };
  //handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };
  const { email, password } = currentUser;
  return (
    <div onSubmit={handleSubmit} className="sign-in">
      <h2>I already have an account</h2>
      <span className="title">Sign in with your email and password</span>
      <form>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(Signin);
