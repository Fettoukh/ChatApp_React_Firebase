import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";

function Login() {
  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {})
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Button onClick={SignIn}>Sign In</Button>
    </div>
  );
}

export default Login;
