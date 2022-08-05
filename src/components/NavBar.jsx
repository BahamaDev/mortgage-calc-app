import React from "react";
import { useState } from "react";
import SavedData from "./SavedData";
import { Navigate, useNavigate } from "react-router-dom";

const NavBar = ({ activeUser, user, logout }) => {
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
            {!user && (
              <button
                className="btn btn-success m-2"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Sign Up
              </button>
            )}
            {!user && (
              <button
                className="btn btn-secondary m-2"
                onClick={() => {
                  navigate("/login");
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
