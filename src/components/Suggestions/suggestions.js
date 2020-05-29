import React from "react";
import { connect } from "react-redux";

import Suggestion from "./Suggestion/suggestion";

import "./styles.css";

const Suggestions = ({ suggestionList }) => {
  return (
    <div className="suggestions-container">
      <div className="suggestions">
        <div className="suggestions-title">
          <h4>A quién seguir</h4>
        </div>
        {Object.keys(suggestionList).map((username) => {
          const user = suggestionList[username];
          return <Suggestion key={user} user={user} />;
        })}
        <div>
          <h5>Mostrar mas</h5>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  suggestionList: { user: "prueba1", user2: "prueba2" },
}))(Suggestions);
