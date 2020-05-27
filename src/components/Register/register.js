import React from "react";

import RegisterForm from "./RegisterForm/registerform";

const Register = () => {
  return (
    <div className="main-login-container">
      <div className="login-logo">
        <img
          src="https://pngimg.com/uploads/twitter/twitter_PNG15.png"
          alt=""
        />
        <h1>Crea Tu Usuario en Twitter</h1>
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;
