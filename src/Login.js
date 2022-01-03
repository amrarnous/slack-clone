import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { auth, provider } from "./firebase";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => console.log(err));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png"
          alt=""
        />
        <h1>Login to Slack Clone</h1>
        <Button variant="contained" onClick={signIn}>
          Sign In with google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
const LoginContainer = styled.div`
  background: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  > h1 {
    font-size: 18px;
    color: gray;
    font-weight: 400;
  }
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 24px;
  }
  > button {
    margin-top: 16px;
    text-transform: inherit;
    background-color: #0a8d48;
    color: #fff;
  }
`;
