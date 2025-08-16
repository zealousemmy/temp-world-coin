import React from "react";
import HeaderNav from "./HeaderNav";
import NewHomeFooter from "./NewHomeFooter";
import TradingViewTicker from "../TradindViewTicker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const HomeWrapper = ({ children, hasNavFooter = true }) => {
  return (
    <>
      <head>
        {/* CSS from /public/new-assets */}
        <link
          rel="stylesheet"
          href="/new-assets/css/plugins/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/new-assets/css/plugins/animate.css" />
        <link
          rel="stylesheet"
          href="/new-assets/css/plugins/fontawesome.min.css"
        />
        <link
          rel="stylesheet"
          href="/new-assets/css/plugins/jquery-ui-min.css"
        />
        <link
          rel="stylesheet"
          href="/new-assets/css/plugins/magnific-popup.css"
        />
        <link
          rel="stylesheet"
          href="/new-assets/css/plugins/materialicons.css"
        />
        <link rel="stylesheet" href="/new-assets/css/plugins/nice-select.css" />
        <link
          rel="stylesheet"
          href="/new-assets/css/plugins/odometer-min.css"
        />
        <link rel="stylesheet" href="/new-assets/css/plugins/swiper.min.css" />
        <link rel="stylesheet" href="/new-assets/css/style.min.css" />
      </head>
      {hasNavFooter ? (
        <>
          <HeaderNav />
          {children}
          <TradingViewTicker />
          <NewHomeFooter />
        </>
      ) : (
        <>
          {/* <HeaderNav /> */}
          {children}
          {/* <TradingViewTicker /> */}
          {/* <NewHomeFooter /> */}
        </>
      )}
    </>
  );
};

export default HomeWrapper;
