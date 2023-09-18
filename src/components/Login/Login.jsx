import React from "react";
import "./Login.css";
import logo from "../../assets/slack-logo (2).png";
import { auth, provider } from "../../firebaseConfig";
import { actionTypes } from "../../reducer";
import { getDataLayerValue } from "../../DataLayer";

const Login = () => {
  const [{ user }, dispatch] = getDataLayerValue();

  const handleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="" />
        <div className="login__info">
          <h1>Sign in to React Programmers HQ</h1>
          <h4>reactprogrammer.slack.com</h4>
          <button onClick={handleLogin}>Sign in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
