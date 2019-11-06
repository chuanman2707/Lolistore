import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { SignInContainer, ButtonContainer } from "./sign-in.styles";

import { connect } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.action";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [credential, setCredential] = useState({ email: "", password: "" });

  const { email, password } = credential;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredential({ ...credential, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
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
        <ButtonContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

const mapDisPatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDisPatchToProps
)(SignIn);
