"use client";
import { parseFormattedAmount } from "@/hooks/helpers";
import React, { useEffect, useState } from "react";

const WalletsSections = ({ balance, invested, profit, pendingBalance }) => {
  const [btcEquivalent, setBtcEquivalent] = useState(null); // BTC equivalent of the balance
  const currency = "USD";

  const normalAmount = parseFormattedAmount(balance);

  useEffect(() => {
    const fetchBtcEquivalent = async () => {
      try {
        // Fetch the conversion rate from USD (or other currency) to BTC
        const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=BTC`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.BTC) {
          // Calculate the equivalent in BTC
          setBtcEquivalent((normalAmount * data.BTC).toFixed(8)); // Bitcoin equivalent
        } else {
          console.error("Error fetching Bitcoin equivalent:", data);
        }
      } catch (error) {
        console.error("Error fetching conversion data:", error);
      }
    };

    // Fetch the Bitcoin equivalent of the user balance
    fetchBtcEquivalent();
  }, [balance, currency]);
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-4">
          <div className="card shining-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/coins/01.png"
                    className="img-fluid avatar avatar-30 avatar-rounded"
                    alt="img60"
                  />
                  <span className="fs-5 me-2">Available Balance</span>
                </div>
              </div>
              <div className="pt-3">
                <h4 className="counter" style={{ visibility: "visible" }}>
                  ${balance}
                </h4>
                <div className="pt-3">
                  <small className="text-success"> {btcEquivalent}</small>
                  <small className="ms-2">(BTC Equivalent)</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4">
          <div className="card shining-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/coins/06.png"
                    className="img-fluid avatar avatar-30 avatar-rounded"
                    alt="img60"
                  />
                  <span className="fs-5 me-2">Pending Deposits</span>
                </div>
              </div>
              <div className="progress-detail pt-3">
                <h4 className="counter" style={{ visibility: "visible" }}>
                  ${pendingBalance}
                </h4>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-lg-4">
          <div className="card shining-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/coins/06.png"
                    className="img-fluid avatar avatar-30 avatar-rounded"
                    alt="img60"
                  />
                  <span className="fs-5 me-2">Total Invested</span>
                </div>
              </div>
              <div className="progress-detail pt-3">
                <h4 className="counter" style={{ visibility: "visible" }}>
                  ${invested}
                </h4>
                <div className="pt-3">
                  <small className="text-success"> All Investments</small>
                  {/* <small className="ms-2">(LTC/USDT)</small> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card shining-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/coins/03.png"
                    className="img-fluid avatar avatar-30 avatar-rounded"
                    alt="img60"
                  />
                  <span className="fs-5 me-2">Total Profit</span>
                </div>
              </div>
              <div className="progress-detail pt-3">
                <h4 className="counter" style={{ visibility: "visible" }}>
                  ${profit}
                </h4>
                <div className="pt-3">
                  <small className="text-success"> All Profits</small>
                  {/* <small className="ms-2">(LTC/USDT)</small> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletsSections;
