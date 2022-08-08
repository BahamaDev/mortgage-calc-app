import React from "react";
import { useState } from "react";
import SavedData from "./SavedData";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Main from "./Main";

const NavBar = ({
  activeUser,
  user,
  logout,
  setShowSignUp,
  showSignUp,
  showLogIn,
  setShowLogIn,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <h2 className="text-white">{user?.email}</h2>
          <h2 className="text-white"></h2>
          <a className="navbar-brand" href="">
            <img src="/" width="30" height="30" alt="" />
          </a>
          <div>
            {/* If there is not a logged in user. This navigate to sign up page and removes the button.  */}
            {!user && showSignUp == true && (
              <button
                className="btn btn-success m-2"
                onClick={() => {
                  navigate("/register");
                  setShowSignUp(false);
                }}
              >
                Sign Up
              </button>
            )}

            {!user && showLogIn == true && (
              <button
                className="btn btn-secondary m-2"
                onClick={() => {
                  navigate("/login");
                  setShowLogIn(false);
                }}
              >
                Log In
              </button>
            )}

            {user && (
              <button className="btn btn-danger m-2" onClick={logout}>
                Log Out
              </button>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
