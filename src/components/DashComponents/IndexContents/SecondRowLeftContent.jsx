"use client";
import { useState, useEffect } from "react";
import CustomInvestmentTable from "../shared/CustomInvestmentTables";
import DepositForm from "../DepositContents/DepositForm";
import { formatAmount, parseFormattedAmount } from "@/hooks/helpers";
import { toast } from "react-toastify";
import BTCChartWidget from "@/components/Widgets/BTCChartWidget";
import CryptoWaveChart from "@/components/Widgets/CryptoWaveChart";

// import ApexCharts from "apexcharts";

const SecondRowLeftContent = ({
  balance,
  invested,
  profit,
  pendingBalance,
  deposits,
  bonusBalance,
  referralCode,
}) => {
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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast("copied to clipboard!");
      },
      (err) => {
        toast("Failed to copy text.");
      }
    );
  };

  return (
    <div className="col-lg-8">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6">
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
            <div className="col-lg-6">
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
                    {/* <div className="pt-3">
                      <small className="text-success">+ 0.8%</small>
                      <small className="ms-2">(LTC/USDT)</small>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
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
                    {/* <div className="pt-3">
                      <small className="text-success">+ 0.8%</small>
                      <small className="ms-2">(LTC/USDT)</small>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
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
                    {/* <div className="pt-3">
                      <small className="text-success">+ 0.8%</small>
                      <small className="ms-2">(ETH/USDT)</small>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <CryptoWaveChart symbol="BINANCE:BTCUSDT" height={220} />
          <BTCChartWidget height="50vh" />
        </div>
        <br />
        <br />
        <div className=" mt-6 col-lg-12">
          {/* <div className="card"> */}
          <div className="card-header mb-15">
            <h4 className="px-3">Recent Deposits</h4>
          </div>
          {/* </div> */}
          <CustomInvestmentTable investments={deposits} />
        </div>

        <div className="col-lg-12">
          <DepositForm />
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header d-flex justify-content-between flex-wrap gap-3">
                  <div className="header-title">
                    <h4 className="card-title">Total Earned From Referral</h4>
                  </div>
                  <div className="d-flex">
                    <button
                      className="btn bg-secondary btn-sm  border-0 text-white"
                      type="button">
                      <img
                        src="assets/images/coins/01.png"
                        className="img-fluid avatar avatar-30 avatar-rounded"
                        alt="img5"
                      />
                      {bonusBalance} usd
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() =>
                      copyToClipboard(
                        `https://www.cryp-tech.com/sign-up?ref=${referralCode}`
                      )
                    }>
                    <span>COPY LINK</span>
                    <svg
                      className="rotate-45"
                      width={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.25 12.2744L19.25 12.2744"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondRowLeftContent;
