import { fork, all } from "redux-saga/effects";

import { watchLoginStarted, watchRefreshTokenStarted } from "./auth";
// import { watchCreateUserStarted } from "./createuser";

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchRefreshTokenStarted),
    // fork(watchCreateUserStarted),
  ]);
}

export default mainSaga;
