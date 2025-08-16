"use client";
import InvestmentIndex from "@/components/DashComponents/InvestmentComponents/InvestmentIndex";
import KeepAnEye from "@/components/DashComponents/InvestmentComponents/KeepAnEye";
import CryptoWaveChart from "@/components/Widgets/CryptoWaveChart";
import React from "react";

const InvestmentPlans = () => {
  return (
    <div>
      <div className=" col-10 mx-auto ">
        <CryptoWaveChart symbol="BINANCE:BTCUSDT" height={220} />
      </div>

      <br />
      <br />
      <KeepAnEye />
      <InvestmentIndex />
    </div>
  );
};

export default InvestmentPlans;
