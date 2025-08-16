"use client";
import HomeWrapper from "@/components/HomeComponents/HomeWrapper";
import SignupPageContents from "@/components/HomeComponents/SignupPageContents";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="container py-12">Loading…</div>}>
        <HomeWrapper hasNavFooter={false}>
          <SignupPageContents />
        </HomeWrapper>
      </Suspense>

      {/* <SignupContents /> */}
    </>
  );
}
