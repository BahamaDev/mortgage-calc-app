import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Register from "./Register";
import SavedData from "./SavedData";
const Main = ({
  handleClearAll,
  handlePurchaseChange,
  handleDownPaymentChange,
  handleInterestChange,
  handlePeriodChange,
  getMortgage,
  purchasePrice,
  downPayment,
  interestRate,
  paymentPeriod,
  data,
  saveQuote,
  setShowSignUp,
  setShowLogIn,
  setIsActive,
  user,
  isActive,
}) => {
  useEffect(() => {
    !user && setShowSignUp(true);
    !user && setShowLogIn(true);
  });

  return (
    <>
      {/* <Register /> */}
      <div className="container-md-10  main mx-auto page-container border border-danger ">
        {" "}
        <div className="row main-row border border-success">
          {/* Middle Column / Main Content */}
          {/* Middle Column / Main Content */}
          <div className="col-md-8  mx-auto border border-primary">
            {" "}
            <div className="container pt-5 pb-5 ">
              <header className="row  pb-3 pb-sm-1">
                <div className="col text-center mx-auto ">
                  <p className="h1">Free Mortgage Calculator</p>
                </div>
              </header>

              {/* Input and Output Sections */}
              <section className="row mx-auto" id="input-section">
                {" "}
                <div className="row mx-auto gap-2 justify-content-center">
                  {" "}
                  {/* For Input Section */}
                  {/* For Input Section */}
                  <div className="col-md-3 col-8 card text-center text-md-start pt-3">
                    <div className="row text-end text-sm">
                      <a
                        className="text-muted"
                        href="#"
                        onClick={handleClearAll}
                      >
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
                      onChange={(e) => handleDownPaymentChange(e)}
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
                  <div className="col-md-6 col-8 justify-content-center card">
                    <div className="row mx-auto text-center">Your Mortgage</div>
                    <div className="row mtg-data border-top text-center">
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
                    <button
                      className={`btn btn-secondary ${isActive}`}
                      onClick={saveQuote}
                    >
                      {" "}
                      Save Quote
                    </button>
                  </div>
                </div>
              </section>

              {/* Saved Data */}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
