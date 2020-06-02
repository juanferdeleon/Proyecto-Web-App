import { call, takeEvery, put, select } from "redux-saga/effects";

import { API_BASE_URL } from "../settings";
import * as selectors from "../reducers";
import * as actions from "../actions/followinfo";
import * as types from "../types/followinfo";

function* getFollowingUsers(action) {
  try {
    const isAuth = yield select(selectors.isAuthenticated);

    if (isAuth) {
      const token = yield select(selectors.getAuthToken);
      const response = yield call(
        fetch,
        `${API_BASE_URL}/follower/get_following_list/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const jsonResult = yield response.json();
        yield put(actions.completeFetchingFollowingUsers(jsonResult));
      } else {
        const { non_field_errors } = yield response.json();
        yield put(actions.failFetchingFollowingUsers(non_field_errors[0]));
      }
    }
  } catch (error) {
    yield put(actions.failFetchingFollowingUsers(error));
  }
}

export function* watchGetFollowingUsers() {
  yield takeEvery(types.FETCHING_FOLLOWING_USERS_STARTED, getFollowingUsers);
}
