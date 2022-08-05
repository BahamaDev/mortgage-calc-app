import React from "react";

const Register = ({
  registerEmail,
  registerPassword,
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
        Rigister
      </button>







      
    </>
  );
};

export default Register;
