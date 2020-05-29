import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import SideBar from "../SideBar/sidebar";
import ProfileContainer from "./ProfileContainer/profilecontainer";
import Suggestions from "../Suggestions/suggestions";
import * as selectors from "../../reducers";

import "./styles.css";

const Profile = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="main-profile-container">
      <SideBar />
      <ProfileContainer />
      <Suggestions />
    </div>
  );
};

export default connect((state) => ({
  isAuthenticated: selectors.isAuthenticated(state),
}))(Profile);
