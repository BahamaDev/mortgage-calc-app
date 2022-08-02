import React from "react";
import SavedData from "./SavedData";

const NavBar = ({ activeUser, user }) => {
  return (
    <>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <h2 className="text-white">{user?.email}</h2>
          <h2 className="text-white"></h2>
          <a className="navbar-brand" href="">
            <img src="/" width="30" height="30" alt="" />
          </a>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
