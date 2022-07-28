import React from "react";
import { useState, useEffect } from "react";
import SavedData from "./components/SavedData";
import NavBar from "./components/NavBar";

function App() {
  const [purchasePrice, setPurchasePrice] = useState();
  const [downPayment, setDownPayment] = useState();
  const [paymentPeriod, setPaymentPeriod] = useState();
  const [interestRate, setInterestRate] = useState();
  const [data, setData] = useState({});
  const [saved, setSaved] = useState([]);

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
      period: paymentPeriod,
      monthly: finalMonthly.toFixed(2),
    };
    setData(answer);
  };

  const handleClearAll = () => {
    setPurchasePrice(0);
    setDownPayment(0);
    setPaymentPeriod(0);
    setInterestRate(0);
  };

  const saveQuote = () => {
    setSaved([...saved, data]);
  };
  console.log("saved", saved);

  const deleteEntry = (e) => {
    console.log(e.target.getAttribute("value"));
    saved.splice([e.target.getAttribute("value")], 1);
    console.log(saved);
  };

  return (
    <>
      <NavBar />

      <div className="container-lg-10 main mx-auto page-container border border-danger ">
        {" "}
        <div className="row main-row border border-success">
          {/* Sidebar 1 */}
          {/* Sidebar 1 */}
          {/* <div className="col border side border-dark ">
            <div className="h3">HELLO</div>
          </div> */}

          {/* Middle Column / Main Content */}
          {/* Middle Column / Main Content */}
          <div className="col-8 mx-auto border border-primary">
            {" "}
            <div className="container pt-5 pb-5 ">
              <header className="row  pb-3">
                <div className="col text-center mx-auto ">
                  <h1>Free Mortgage Calculator</h1>
                </div>
              </header>

              {/* Input and Output Sections */}
              <section className="row mx-auto" id="input-section">
                {" "}
                <div className="row mx-auto gap-2 justify-content-center">
                  {" "}
                  {/* For Input Section */}
                  {/* For Input Section */}
                  <div className="col-md-3 card text-center text-md-start pt-3">
                    <div className="row text-end">
                      <a href="#" onClick={handleClearAll}>
                        Clear All
                      </a>
                    </div>{" "}
                    <label htmlFor="purchase-price">Purchase Price</label>
                    <input
                      className="form-control mb-2"
                      type="number"
                      id="purchase-price"
                      value={purchasePrice}
                      onChange={(e) => handlePurchaseChange(e)}
                      required
                    />
                    <label htmlFor="down-payment">Down Payment</label>
                    <input
                      type="text"
                      className="form-control mb-2 "
                      id="down-payment"
                      value={downPayment}
                      onChange={(e) => handlDownPaymentChange(e)}
                      required
                    />
                    <label htmlFor="interest-rate">Interest Rate</label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="interest-rate"
                      value={interestRate}
                      onChange={(e) => handleInterestChange(e)}
                      required
                    />
                    <label htmlFor="payment-period">Payment Period</label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="payment-period"
                      value={paymentPeriod}
                      onChange={(e) => handlePeriodChange(e)}
                      required
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
                  <div className="col-6 justify-content-center card">
                    <div className="row mx-auto text-center">Your Mortgage</div>
                    <div className="row mtg-data border-top text-center ">
                      <div className="col-md-4 border-bottom h5">
                        Principal: ${data.principal || 0}
                      </div>
                      <div className="col-md-4 col-sm-6 border-bottom h5">
                        Interest: {data.interestRate || 0}%
                      </div>
                      <div className="col-md-4 col-sm-6 border-bottom h5">
                        Period: {data.period || 0} yrs{" "}
                      </div>
                    </div>
                    <div className="">
                      <p className=" h6 text-center">Total monthly</p>
                      <p className="h2 text-center">
                        ${data.monthly || "0.00"}{" "}
                      </p>
                    </div>
                    <button className="btn btn-secondary" onClick={saveQuote}>
                      {" "}
                      Save Quote
                    </button>
                  </div>
                </div>
              </section>

              {/* Saved Data */}
              <section className="row mt-3">
                <div className="col">
                  <SavedData saved={saved} deleteEntry={deleteEntry} />
                </div>
              </section>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
