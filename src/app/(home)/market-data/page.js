"use client";
import HomeWrapper from "@/components/HomeComponents/HomeWrapper";
import MarketDataPageContents from "@/components/HomeComponents/MarketDataPageContents";

export default function Market() {
  return (
    <>
      <HomeWrapper>
        <MarketDataPageContents />
      </HomeWrapper>
      {/* <MarketDataContents /> */}
    </>
  );
}
