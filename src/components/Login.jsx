import React from "react";
import { useEffect } from "react";

const Login = ({
  setLoginEmail,
  setLoginPassword,
  loginEmail,
  loginPassword,
  login,
  setShowLogIn,
  errorMessage,
}) => {
  useEffect(() => {
    setShowLogIn(false);
  });

  return (
    <>
      <div className="modal-wrapper container-fluid">
        <div className="container modal-container shadow-lg col-md-4 col-sm-6 col-10  border pt-5 ">
          <div className="row modal-row align-items-center">
            <div className="col mx-auto a">
              <h2>Login Here</h2>
              <input
                className="form-control mb-2"
                type="text"
                id="login-email"
                placeholder="Email..."
                value={loginEmail}
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
                required
              />
              <input
                className="form-control mb-2"
                type="password"
                id="register-password"
                placeholder="Password..."
                value={loginPassword}
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
                required
              />
              <button className="btn btn-primary" onClick={login}>
                Login
              </button>
            </div>
            <div className="row">
              <p>{errorMessage || ""}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
