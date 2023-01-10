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
        <nav className="navbar navbar-dark bg-dark that-navbar">
          <h4 className="text-white m-2">{user?.email}</h4>

          <a className="navbar-brand" href="">
            <img
              src="https://randomuser.me/api/portraits/men/70.jpg"
              width="70"
              height="70"
              alt="User-image"
            />
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
