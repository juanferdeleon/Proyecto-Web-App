import React from "react";

import userlogo from "../../../img/userlogo.svg";

import "./styles.css";

const Suggestion = ({ user }) => {
  return (
    <div className="suggestion-container">
      <img src={userlogo} alt="" />
      {"@" + user}
      <button className="suggestions-follow-btn">+</button>
    </div>
  );
};

export default Suggestion;
