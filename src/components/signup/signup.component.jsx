import React, { useState } from "react";
import { connect } from "react-redux";

import "./signup.styles.scss";
import CustomButton from "../custom-button/custombutton.component";
import FormInput from "../form-input/forminput.component";
import { signUpStart } from "../../redux/user/user.actions";

const Signup = (props) => {
  const [currentUser, setCurrentUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { signUpStart } = props;
    const { displayName, email, password, confirmPassword } = currentUser;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    signUpStart(email, password, displayName);
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
    <div className="sign-up">
      <h2>I do not have account</h2>
      <span className="title">Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});
export default connect(null, mapDispatchToProps)(Signup);
