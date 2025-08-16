"use client";
import HomeWrapper from "@/components/HomeComponents/HomeWrapper";
import SignupPageContents from "@/components/HomeComponents/SignupPageContents";

export default function Home() {
  return (
    <>
      <HomeWrapper hasNavFooter={false}>
        <SignupPageContents />
      </HomeWrapper>
      {/* <SignupContents /> */}
    </>
  );
}
