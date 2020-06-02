import { fork, all } from "redux-saga/effects";

import { watchLoginStarted, watchRefreshTokenStarted } from "./auth";
import { watchCreateUserStarted } from "./createuser";
import { watchGetFeedTweets } from "./feedtweets";
import { watchTweetSomething } from "./tweetsomething";
import { watchRetweetSomething } from "./retweetsomething";
import { watchFavSomething } from "./favsomething";
import { watchSaveSomething } from "./savesomething";
import { watchGetMyTweets } from "./mytweets";
import { watchGetFollowingUsers } from "./followinfo";

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchRefreshTokenStarted),
    fork(watchCreateUserStarted),
    fork(watchGetFeedTweets),
    fork(watchTweetSomething),
    fork(watchRetweetSomething),
    fork(watchFavSomething),
    fork(watchSaveSomething),
    fork(watchGetMyTweets),
    fork(watchGetFollowingUsers),
  ]);
}

export default mainSaga;
