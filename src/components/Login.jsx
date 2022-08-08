import React from "react";
import { useEffect } from "react";

const Login = ({ setLoginEmail, setLoginPassword, login, setShowLogIn }) => {
  useEffect(() => {
    setShowLogIn(false);
  });

  return (
    <>
      <h2>Login</h2>
      <input
        className="form-control mb-2"
        type="text"
        id="login-email"
        placeholder="Email..."
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
        required
      />
      <input
        className="form-control mb-2"
        type="password"
        id="login-password"
        placeholder="Password..."
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
        required
      />
      <button className="btn btn-secondary" onClick={login}>
        SignIn
      </button>
    </>
  );
};

export default Login;
