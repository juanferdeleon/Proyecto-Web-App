import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faRetweet,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import userlogo from "../../img/userlogo.svg";

import "./styles.css";

const Tweet = ({ tweetInfo }) => {
  return (
    <div className="tweet-main-container">
      <div className="tweet-something-user-logo-container">
        <img src={userlogo} alt="" />
      </div>
      <div className="tweet-info">
        <div className="tweet-something-user">
          <h3>{"@" + tweetInfo.user_id}</h3>
          <h5>{tweetInfo.tweeted_date}</h5>
        </div>
        <div className="tweet-content">
          <p>{tweetInfo.tweet}</p>
        </div>
        <div className="tweet-data">
          <div className="tweet-interaction">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div className="tweet-interaction tweet-interaction-fav">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="tweet-info-count">
            <p>{tweetInfo.favs}</p>
          </div>
          <div className="tweet-interaction tweet-interaction-retweet">
            <FontAwesomeIcon icon={faRetweet} />
          </div>
          <div className="tweet-info-count">
            <p>{tweetInfo.retweets}</p>
          </div>
          <div className="tweet-interaction">
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(undefined, (dispatch) => ({
  //TODO despachar acciones comment, retweet, fav y save
}))(Tweet);
