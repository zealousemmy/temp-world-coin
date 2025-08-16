"use client";
import DepositContent from "@/components/DashComponents/DepositContents/DepositContent";
import CryptoWaveChart from "@/components/Widgets/CryptoWaveChart";
import React from "react";

const Deposit = () => {
  return (
    <div>
      <div className=" col-10 mx-auto ">
        <CryptoWaveChart symbol="BINANCE:ETHUSDT" height={220} />
      </div>
      <DepositContent />
    </div>
  );
};

export default Deposit;
