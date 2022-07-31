import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import app from "./components/Firebase";
import { auth } from "./components/Firebase";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import SavedData from "./components/SavedData";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

import Login from "./components/Login";
import Register from "./components/Register";

// Sets active user to the current logged in user.
function App() {
  const [purchasePrice, setPurchasePrice] = useState();
  const [downPayment, setDownPayment] = useState();
  const [paymentPeriod, setPaymentPeriod] = useState();
  const [interestRate, setInterestRate] = useState();
  const [data, setData] = useState({});
  const [saved, setSaved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  // For Login and Authentication
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [activeUser, setActiveUser] = useState();

  // Related to Main Input, Calculation, Output and Saving
  // Related to Main Input, Calculation, Output and Saving
  // Related to Main Input, Calculation, Output and Saving
  const handlePurchaseChange = (e) => {
    e.preventDefault();
    setPurchasePrice(e.target.value);
  };
  const handleDownPaymentChange = (e) => {
    e.preventDefault();
    setDownPayment(e.target.value);
  };
  const handleInterestChange = (e) => {
    e.preventDefault();
    setInterestRate(e.target.value);
  };
  const handlePeriodChange = (e) => {
    e.preventDefault();
    setPaymentPeriod(e.target.value);
  };

  const getMortgage = () => {
    const p = purchasePrice - downPayment || 0;
    const r = interestRate / 100;
    const n = paymentPeriod;
    const monthlyPayments =
      Math.round(p * (r * Math.pow(r + 1, n))) / (Math.pow(r + 1, n) - 1);
    // console.log(p, r, n, monthlyPayments);
    const finalMonthly = monthlyPayments / 12 || 0;
    // console.log(finalMonthly.toFixed(2));
    const answer = {
      purchasePrice,
      downPayment,
      interestRate,
      principal: p,
      period: paymentPeriod,
      monthly: finalMonthly.toFixed(2),
    };
    if (purchasePrice == 0) {
      alert("Set Purchase Price");
    } else if (interestRate == 0) {
      alert("Set Interest Rate");
    } else if (downPayment == 0) {
      alert("Set Down Payment");
    } else if (paymentPeriod == null || paymentPeriod == undefined) {
      alert("Set payment period");
    } else setData(answer);
  };

  const handleClearAll = () => {
    setPurchasePrice("");
    setDownPayment("");
    setPaymentPeriod("");
    setInterestRate("");
  };

  const saveQuote = () => {
    //
    // if (data === saved[0]) {
    //   alert("This quote has already been saved.");
    // } else setSaved([...saved, data]);

    if (!saved.includes(data)) {
      setSaved([...saved, data]);
    } else {
      alert("This quote has already been saved");
    }
  };

  // onAuthStateChanged(auth, (currentUser) => {
  //   setActiveUser(currentUser || null);
  // });

  useEffect(() => {
    // onAuthStateChanged();
  }, []);

  // Related to Registration and Login
  // Related to Registration and Login
  // Related to Registration and Login

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {};

  const logout = async () => {};

  console.log("saved", saved);

  const deleteEntry = (e) => {
    console.log(e.target.getAttribute("value"));
    saved.splice([e.target.getAttribute("value")], 1);
    console.log(saved);
  };

  const reloadEntry = (e) => {
    const entry = saved[e.target.getAttribute("value")];
    console.log(entry);

    setPurchasePrice(entry.purchasePrice);
    setPaymentPeriod(entry.paymentPeriod);
    setDownPayment(entry.downPayment);
    setInterestRate(entry.interestRate);
  };

  return (
    <>
      <NavBar auth={auth} />

      <Register
        setRegisterPassword={setRegisterPassword}
        setRegisterEmail={setRegisterEmail}
        register={register}
      />
      <Login
        setLoginPassword={setLoginPassword}
        setLoginEmail={setLoginEmail}
      />

      <Main
        handleClearAll={handleClearAll}
        purchasePrice={purchasePrice}
        handlePurchaseChange={handlePurchaseChange}
        handleDownPaymentChange={handleDownPaymentChange}
        handleInterestChange={handleInterestChange}
        handlePeriodChange={handlePeriodChange}
        getMortgage={getMortgage}
        saved={saved}
        downPayment={downPayment}
        paymentPeriod={paymentPeriod}
        data={data}
        saveQuote={saveQuote}
      />

      <SavedData
        saved={saved}
        deleteEntry={deleteEntry}
        reloadEntry={reloadEntry}
      />
    </>
  );
}

export default App;
