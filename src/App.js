import React, { useRef } from "react";
import { useState, useEffect } from "react";
import SavedData from "./components/SavedData";
import NavBar from "./components/NavBar";

function App() {
  const [purchasePrice, setPurchasePrice] = useState(4000000);
  const [downPayment, setDownPayment] = useState(40000);
  const [paymentPeriod, setPaymentPeriod] = useState(30);
  const [interestRate, setInterestRate] = useState(2);
  const [data, setData] = useState({});
  const [saved, setSaved] = useState([]);

  const saveQuote = () => {
    setSaved([...saved, data]);
  };
  console.log("saved", saved);

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

      monthly: finalMonthly.toFixed(2),
    };
    setData(answer);
  };

  return (
    <>
      <NavBar />
      {/* For Input Section */}
      {/* For Input Section */}
      <div className="container main-container  pt-5 pb-5 ">
        <section className="row mx-auto" id="input-section">
          {" "}
          <div className="row mx-auto border justify-content-center">
            {" "}
            <div className="col-2 card text-center text-md-start pt-3">
              {" "}
              <label htmlFor="purchase-price">Purchase Price</label>
              <input
                className="form-control mb-2"
                type="number"
                id="purchase-price"
                value={purchasePrice}
                onChange={(e) => handlePurchaseChange(e)}
              />
              <label htmlFor="down-payment">Down Payment</label>
              <input
                type="text"
                className="form-control mb-2 "
                id="down-payment"
                value={downPayment}
                onChange={(e) => handlDownPaymentChange(e)}
              />
              <label htmlFor="interest-rate">Interest Rate</label>
              <input
                type="text"
                className="form-control mb-2"
                id="interest-rate"
                value={interestRate}
                onChange={(e) => handleInterestChange(e)}
              />
              <label htmlFor="payment-period">Payment Period</label>
              <input
                type="text"
                className="form-control mb-2"
                id="payment-period"
                value={paymentPeriod}
                onChange={(e) => handlePeriodChange(e)}
              />
              <button
                className="btn btn-primary mb-2"
                type="submit"
                onClick={getMortgage}
              >
                Calculate
              </button>
            </div>
            {/* For Output Section */}
            {/* For Output Section */}
            <div className="col-6  card">
              <div className="row mx-auto text-center mb-2 mt-2">
                Your Mortgage
              </div>
              <div className="row mtg-data border-top text-center ">
                <div className="col-md-4 border-bottom h5">
                  Principal: ${data.principal}
                </div>
                <div className="col-md-4 col-sm-6 border-bottom h5">
                  Interest: {data.interest}%{" "}
                </div>
                <div className="col-md-4 col-sm-6 border-bottom h5">
                  Period: {paymentPeriod} yrs{" "}
                </div>
              </div>
              <div className="jumbotron">
                <p className="h2 text-center">${data.monthly}</p>
              </div>
              <button className="btn btn-secondary" onClick={saveQuote}>
                {" "}
                Save Quote
              </button>
            </div>
          </div>
        </section>
        {/* For Output Section */}
        {/* For Output Section */}

        {/* <section className="row pt-3">
          <div className="col-8 mx-auto card">
            <div className="row mx-auto text-center mb-2 mt-2">
              Your Mortgage
            </div>
            <div className="row mtg-data border-top text-center ">
              <div className="col-md-4 border-bottom h5">
                Principal: ${data.principal}
              </div>
              <div className="col-md-4 col-sm-6 border-bottom h5">
                Interest: {data.interest}%{" "}
              </div>
              <div className="col-md-4 col-sm-6 border-bottom h5">
                Period: {paymentPeriod} yrs{" "}
              </div>
            </div>
            <div className="jumbotron">
              <p className="h2 text-center">${data.monthly}</p>
            </div>
            <button className="btn btn-secondary" onClick={saveQuote}>
              {" "}
              Save Quote
            </button>
          </div>
        </section> */}
      </div>{" "}
      <section className="container">
        <SavedData saved={saved} />
      </section>
    </>
  );
}

export default App;
