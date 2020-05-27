import React from "react";

import LoginForm from "./LoginForm/loginform";

import "./styles.css";

const Login = () => {
  return (
    <div className="main-login-container">
      <div className="login-logo">
        <img
          src="https://pngimg.com/uploads/twitter/twitter_PNG15.png"
          alt=""
        />
        <h1>Iniciar Sesion en Twitter</h1>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
