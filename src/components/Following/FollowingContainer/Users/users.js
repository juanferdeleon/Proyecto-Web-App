import React from "react";
import { connect } from "react-redux";

import * as selectors from "../../../../reducers";
import User from "./User/user";

import "./styles.css";

const Users = ({ followingList }) => {
  return (
    <div className="users-container">
      {followingList ? (
        Object.values(followingList).map((user) => (
          <User key={user.user_name} userInfo={user} />
        ))
      ) : (
        <h3>Aun no sigues a alguien.</h3>
      )}
    </div>
  );
};

export default connect((state) => ({
  followingList: selectors.getFollowingList(state),
}))(Users);
