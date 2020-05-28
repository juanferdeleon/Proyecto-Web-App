import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBookmark,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import "./styles.css";
import * as actions from "../../actions/auth";
import { Redirect, Link } from "react-router-dom";

const SideBar = ({ onClick }) => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img
          src="https://pngimg.com/uploads/twitter/twitter_PNG15.png"
          alt=""
        />
      </div>
      <div className="feed-options-container">
        <ul>
          <Link to="feed">
            <div
              className="sidebar-option"
              onClick={() => {
                onClick("feed");
              }}
            >
              <FontAwesomeIcon icon={faHome} />
              <li>Inicio</li>
            </div>
          </Link>
          <Link to="saved">
            <div
              className="sidebar-option"
              onClick={() => {
                onClick("saved");
                return <Redirect to="/saved" />;
              }}
            >
              <FontAwesomeIcon icon={faBookmark} />
              <li>Guardados</li>
            </div>
          </Link>
          <Link to="profile">
            <div
              className="sidebar-option"
              onClick={() => {
                onClick("profile");
              }}
            >
              <FontAwesomeIcon icon={faUser} />
              <li>Perfil</li>
            </div>
          </Link>
          <div
            className="sidebar-option"
            onClick={() => {
              onClick("logout");
            }}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            <li>Logout</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default connect(undefined, (dispatch) => ({
  onClick(path) {
    switch (path) {
      case "feed":
        //TODO CARGAR TWEETS
        console.log(path);
        break;
      case "saved":
        //TODO CARGAR SAVED
        console.log(path);
        break;
      case "profile":
        //TODO CARGAR PROFILE
        console.log(path);
        break;
      case "logout":
        //TODO DISPATCH LOGOUT
        dispatch(actions.logout());
        break;
      default:
        return null;
    }
  },
}))(SideBar);
