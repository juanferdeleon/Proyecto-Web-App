import React from "react";
import { connect } from "react-redux";

import SideBar from "../SideBar/sidebar";
import FeedTweets from "../FeedTweets/feedtweets";
import Suggestions from "../Suggestions/suggestions";
import * as selectors from "../../reducers";

import "./styles.css";
import { Redirect } from "react-router-dom";

const Feed = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="main-feed-container">
      <SideBar />
      <FeedTweets />
      <Suggestions />
    </div>
  );
};

export default connect((state) => ({
  isAuthenticated: selectors.isAuthenticated(state),
}))(Feed);
