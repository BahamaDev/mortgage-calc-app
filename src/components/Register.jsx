import React from "react";

const Register = ({
  setRegisterEmail,
  setRegisterPassword,
  register,

}) => {
  return (
    <>
      
      <h2>Register</h2>
      <input
        className="form-control mb-2"
        type="text"
        id="register-email"
        placeholder="Email..."
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
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
        required
      />
      <button className="btn btn-primary" onClick={register}>
        Rigister
      </button>
    </>
  );
};

export default Register;
