"use client";
import React, { useEffect, useState } from "react";
import Depositors from "@/components/DashComponents/DepositContents/Depositors";
import PurchasePlanComp from "@/components/DashComponents/InvestmentComponents/PurchasePlanComp";
import { useDispatch, useSelector } from "react-redux";
import { getPlans } from "@/redux/features/profile/profile_service_syn";
import TradingViewWidget from "@/components/Widgets/TradingViewWidget";
import CryptoWaveChart from "@/components/Widgets/CryptoWaveChart";
const page = ({ params }) => {
  const { id } = params;
  const [selectedPlan, setSelectedPlan] = useState(null);
  const dispatch = useDispatch();
  const { plans, gettingPlans, getPlansSuccess, getPlansError, wallet } =
    useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getPlans());
  }, []);

  useEffect(() => {
    if (id) {
      const selected = plans.find((item) => item.plan === id);
      if (selected) {
        setSelectedPlan(selected);
      }
    }
  }, [id, plans]);
  return (
    <div className="row pt-2">
      <div className=" col-10 mx-auto ">
        <CryptoWaveChart symbol="BINANCE:ETHUSDT" height={220} />
      </div>

      <br />
      <br />
      <PurchasePlanComp plan={selectedPlan} />
      <div className="col-lg-10 mb-5 col-10 mx-auto ">
        <TradingViewWidget />
      </div>

      {/* <Depositors title="Top  Earners" /> */}
    </div>
  );
};

export default page;
