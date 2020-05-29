import * as types from "../types/mytweets";

export const fetchingMyTweets = () => ({
  type: types.FETCHING_MY_TWEETS_STARTED,
});

export const completeFetchingMyTweets = ({
  myTweets,
  myRetweets,
  myFavouriteTweets,
  mySavedTweets,
}) => ({
  type: types.FETCHING_MY_TWEETS_COMPLETED,
  payload: { myTweets, myRetweets, myFavouriteTweets, mySavedTweets },
});

export const failFetchingMyTweets = (error) => ({
  type: types.FETCHING_MY_TWEETS_FAILED,
  payload: { error },
});
