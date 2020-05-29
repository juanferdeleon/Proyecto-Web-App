import React from "react";
import { connect } from "react-redux";

import * as selectors from "../../reducers";
import Tweet from "../Tweet/tweet";

import "./styles.css";

const Tweets = ({
  navigationStatus,
  myTweets,
  myFavTweets,
  myRetweetedTweets,
  mySavedTweets,
}) => {
  if (navigationStatus === "Tweets") {
    return (
      <div className="tweets-container">
        {myTweets ? (
          Object.keys(myTweets).map((tweetId) => {
            const tweet = myTweets[tweetId];
            return <Tweet key={tweetId} tweetInfo={tweet} />;
          })
        ) : (
          <div>Aun no tienes tweets por ver. Comparte lo que piensas!</div>
        )}
      </div>
    );
  }
  if (navigationStatus === "Favourites") {
    return (
      <div className="tweets-container">
        {myFavTweets ? (
          Object.keys(myFavTweets).map((tweetId) => {
            const tweet = myFavTweets[tweetId];
            return <Tweet key={tweetId} tweetInfo={tweet} />;
          })
        ) : (
          <div>Aun no tienes tweets por ver. Comparte lo que piensas!</div>
        )}
      </div>
    );
  }
  if (navigationStatus === "Retweets") {
    return (
      <div className="tweets-container">
        {myRetweetedTweets ? (
          Object.keys(myRetweetedTweets).map((tweetId) => {
            const tweet = myRetweetedTweets[tweetId];
            return <Tweet key={tweetId} tweetInfo={tweet} />;
          })
        ) : (
          <div>Aun no tienes tweets por ver. Comparte lo que piensas!</div>
        )}
      </div>
    );
  }
  if (navigationStatus === "Saved") {
    return (
      <div className="tweets-container">
        {mySavedTweets ? (
          Object.keys(mySavedTweets).map((tweetId) => {
            const tweet = mySavedTweets[tweetId];
            return <Tweet key={tweetId} tweetInfo={tweet} />;
          })
        ) : (
          <div>Aun no tienes tweets por ver. Comparte lo que piensas!</div>
        )}
      </div>
    );
  }
};

export default connect((state) => ({
  navigationStatus: selectors.getNavigationWindow(state),
  myTweets: selectors.getFeedTweets(state),
  myFavTweets: selectors.getFeedTweets(state),
  myRetweetedTweets: selectors.getFeedTweets(state),
  mySavedTweets: selectors.getFeedTweets(state),
}))(Tweets);
