import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [purchasePrice, setPurchasePrice] = useState(450000);
  const [downPayment, setDownPayment] = useState(13500);
  const [paymentPeriod, setPaymentPeriod] = useState(25);
  const [interestRate, setInterestRate] = useState(3);

  const handlePurchaseChange = (e) => {
    e.preventDefault();
    setPurchasePrice(e.target.value);
  };
  const handlDownPaymentChange = (e) => {
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
    const p = purchasePrice - downPayment;
    const r = interestRate / 100;
    const n = paymentPeriod;
    const monthlyPayments =
      Math.round(p * (r * Math.pow(r + 1, n))) / (Math.pow(r + 1, n) - 1);
    console.log(p, r, n, monthlyPayments);
    const finalMonthly = monthlyPayments / 12;
    console.log(finalMonthly.toFixed(2));
  };

  return (
    <>
      <h1>Hello</h1>

      <section id="input-section">
        {" "}
        <div>
          {" "}
          <label htmlFor="purchase-price">Purchase Price</label>
          <input
            type="text"
            id="purchase-price"
            value={purchasePrice}
            onChange={(e) => handlePurchaseChange(e)}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="down-payment">Down Payment</label>
          <input
            type="text"
            id="down-payment"
            value={downPayment}
            onChange={(e) => handlDownPaymentChange(e)}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="interest-rate">Interest Rate</label>
          <input
            type="text"
            id="interest-rate"
            value={interestRate}
            onChange={(e) => handleInterestChange(e)}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="payment-period">Payment Period</label>
          <input
            type="text"
            id="payment-period"
            value={paymentPeriod}
            onChange={(e) => handlePeriodChange(e)}
          />
        </div>
        <button type="submit" onClick={getMortgage}>
          Calculate
        </button>
      </section>
    </>
  );
}

export default App;
