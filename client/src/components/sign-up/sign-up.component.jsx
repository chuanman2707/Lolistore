import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.action";

import { SignUpContainer, TitleContainer } from "./sign-up.styles";

import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
  const [credential, setCredential] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = credential;
  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password doesn't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setCredential({ ...credential, [name]: value });
  };

  return (
    <SignUpContainer>
      <TitleContainer>I do not have an account</TitleContainer>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredential => dispatch(signUpStart(userCredential))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
