import React from "react";

import userLogo from "../../../../../img/userlogo.svg";
import * as actions from "../../../../../actions/followinfo";

import "./styles.css";
import { connect } from "react-redux";

const User = ({ userInfo, onClick }) => {
  return (
    <div className="display-user">
      <div className="user-pp">
        <img src={userLogo} alt="" />
      </div>
      <div className="user-name">
        <h3>{"@" + userInfo.user_name}</h3>
      </div>
      <div className="user-btn">
        <div
          className="follow-unfollow"
          data-hover="Dejar de seguir"
          onClick={() => onClick(userInfo.user_name)}
        >
          Siguiendo
        </div>
      </div>
    </div>
  );
};

export default connect(undefined, (dispatch) => ({
  onClick(userName) {
    dispatch(actions.unfollowUserStarted(userName));
  },
}))(User);
