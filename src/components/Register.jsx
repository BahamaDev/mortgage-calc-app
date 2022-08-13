import React from "react";
import { useEffect } from "react";

const Register = ({
  registerEmail,
  registerPassword,
  setRegisterEmail,
  setRegisterPassword,
  register,
  errorMessage,
  setShowSignUp,
}) => {
  useEffect(() => {
    setShowSignUp(false);
  });
  return (
    <>
      <div className="modal-wrapper container-fluid">
        <div className="container modal-container col-md-4 col-sm-6 col-10 border-lg shadow pt-5 ">
          <div className="row modal-row align-items-center">
            <div className="col mx-auto a">
              <h2>Sign Up Here</h2>
              <input
                className="form-control mb-2"
                type="text"
                id="register-email"
                placeholder="Email..."
                value={registerEmail}
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                }}
                required
              />
              <input
                className="form-control mb-2"
                type="password"
                id="register-password"
                placeholder="Password..."
                value={registerPassword}
                onChange={(e) => {
                  setRegisterPassword(e.target.value);
                }}
                required
              />
              <button className="btn btn-primary" onClick={register}>
                Sign-Up
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

export default Register;
