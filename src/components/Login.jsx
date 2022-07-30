import React from "react";

const Login = ({ setLoginEmail, setLoginPassword }) => {
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
    </>
  );
};

export default Login;