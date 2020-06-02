import * as types from "../types/followinfo";

export const fetchingFollowingUsers = () => ({
  type: types.FETCHING_FOLLOWING_USERS_STARTED,
});

export const completeFetchingFollowingUsers = (followList) => ({
  type: types.FETCHING_FOLLOWING_USERS_COMPLETED,
  payload: { followList },
});

export const failFetchingFollowingUsers = (error) => ({
  type: types.FETCHING_FOLLOWING_USERS_FAILED,
  payload: { error },
});

export const fetchingFollowerUsers = () => ({
  type: types.FETCHING_FOLLOWING_USERS_STARTED,
});

export const completeFetchingFollowerUsers = (followList) => ({
  type: types.FETCHING_FOLLOWING_USERS_COMPLETED,
  payload: { followList },
});

export const failFetchingFollowerUsers = (error) => ({
  type: types.FETCHING_FOLLOWING_USERS_FAILED,
  payload: { error },
});
