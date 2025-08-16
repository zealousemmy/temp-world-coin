"use client";
import HomeWrapper from "@/components/HomeComponents/HomeWrapper";
import SigninPageContents from "@/components/HomeComponents/SigninPageContents";

export default function Home() {
  return (
    <>
      <HomeWrapper hasNavFooter={false}>
        <SigninPageContents />
      </HomeWrapper>
      {/* <SigninComponents /> */}
    </>
  );
}
