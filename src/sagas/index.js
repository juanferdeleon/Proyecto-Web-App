import { fork, all } from "redux-saga/effects";

import { watchLoginStarted, watchRefreshTokenStarted } from "./auth";
import { watchCreateUserStarted } from "./createuser";
import { watchGetFeedTweets } from "./feedtweets";
import { watchTweetSomething } from "./tweetsomething";

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchRefreshTokenStarted),
    fork(watchCreateUserStarted),
    fork(watchGetFeedTweets),
    fork(watchTweetSomething),
  ]);
}

export default mainSaga;
