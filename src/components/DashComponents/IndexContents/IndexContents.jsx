"use client";
import React, { useEffect } from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import UserDisplay from "./UserDisplay";
import DespositModal from "../Modals/DespositModal";
import { useDispatch, useSelector } from "react-redux";
import { formatAmount } from "@/hooks/helpers";
import {
  depositHistory,
  getTansactions,
} from "@/redux/features/profile/profile_service_syn";
import WalletsSections from "./WalletsSections";
import AssetAllocationChart from "./AssetAllocationChart";
import PortfolioPerformanceChart from "./PortfolioPerformanceChart";
import BTCChartWidget from "@/components/Widgets/BTCChartWidget";

const IndexContents = () => {
  const dispatch = useDispatch();
  const { wallet, deposits, editLoader, transactions, profile } = useSelector(
    (state) => state.profile
  );
  console.log(wallet, deposits, "wallet");

  useEffect(() => {
    dispatch(depositHistory());
    dispatch(getTansactions());
  }, []);
  return (
    <div className="container-fluid content-inner pb-0">
      <UserDisplay userName={profile?.name} />
      <WalletsSections
        balance={formatAmount(wallet?.balance)}
        invested={formatAmount(wallet?.investmentBalance)}
        profit={formatAmount(wallet?.profits)}
        pendingBalance={formatAmount(wallet?.pendingBalance)}
      />

      <div className="row mb-10 ">
        <div className="col-lg-8">
          <PortfolioPerformanceChart investments={deposits} />
        </div>
        <div className="col-lg-4">
          <AssetAllocationChart />
        </div>
      </div>
      <BTCChartWidget height="50vh" />
      {/* <FirstRow /> */}
      {/* <SecondRow
        balance={formatAmount(wallet?.balance)}
        invested={formatAmount(wallet?.investmentBalance)}
        profit={formatAmount(wallet?.profits)}
        pendingBalance={formatAmount(wallet?.pendingBalance)}
        deposits={deposits}
        bonusBalance={formatAmount(wallet?.bonusBalance)}
        referralCode={wallet?.referralCode}
      /> */}
      {/* <DespositModal /> */}
    </div>
  );
};

export default IndexContents;
