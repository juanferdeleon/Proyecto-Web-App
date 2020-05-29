import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faRetweet,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import userLogo from "../../../../img/userlogo.svg";
import { connect } from "react-redux";

import * as selectors from "../../../../reducers";
import * as actions from "../../../../actions/navigation";

import "./styles.css";

const UserInfo = ({
  userName,
  following,
  followers,
  navigationStatus,
  onClick,
}) => {
  return (
    <div className="user-info-container">
      <div className="user-info">
        <div className="info">
          <img src={userLogo} alt="" />
          <h3>{"@" + userName}</h3>
          <div className="follows">
            <p>{following}</p>
            <p>Siguiendo</p>
            <p>{followers}</p>
            <p>Seguidores</p>
          </div>
        </div>
        <div className="edit-profile">
          <div className="edit-profile-btn">Editar Perfil</div>
        </div>
      </div>
      <div className="profile-navigation">
        <div
          className={
            navigationStatus === "Tweets" ? "navigation active" : "navigation"
          }
          onClick={() => onClick("Tweets")}
        >
          <img
            src="https://pngimg.com/uploads/twitter/twitter_PNG15.png"
            alt=""
          />
          <h5>Tweets</h5>
        </div>
        <div
          className={
            navigationStatus === "Favourites"
              ? "navigation active"
              : "navigation"
          }
          onClick={() => onClick("Favourites")}
        >
          <FontAwesomeIcon icon={faHeart} />
          <h5>Favoritos</h5>
        </div>
        <div
          className={
            navigationStatus === "Retweets" ? "navigation active" : "navigation"
          }
          onClick={() => onClick("Retweets")}
        >
          <FontAwesomeIcon icon={faRetweet} />
          <h5>Retweets</h5>
        </div>
        <div
          className={
            navigationStatus === "Saved" ? "navigation active" : "navigation"
          }
          onClick={() => onClick("Saved")}
        >
          <FontAwesomeIcon icon={faBookmark} />
          <h5>Guardados</h5>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    userName: selectors.getAuthUsername(state),
    navigationStatus: selectors.getNavigationWindow(state),
    following: 1,
    followers: 2,
  }),
  (dispatch) => ({
    onClick(window) {
      if (window === "Tweets") {
        dispatch(actions.changeNavigationWindow(window));
      }
      if (window === "Favourites") {
        dispatch(actions.changeNavigationWindow(window));
      }
      if (window === "Retweets") {
        dispatch(actions.changeNavigationWindow(window));
      }
      if (window === "Saved") {
        dispatch(actions.changeNavigationWindow(window));
      }
    },
  })
)(UserInfo);
