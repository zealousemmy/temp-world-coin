"use client";
import {
  getProfile,
  getWallet,
} from "@/redux/features/profile/profile_service_syn";
import LoaderScreen from "@/utils/loaderScreen";
import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-loading-skeleton/dist/skeleton.css";
import { usePathname, useRouter } from "next/navigation";
import SideBar from "@/components/DashComponents/SideBar";
import DashboardHeader from "@/components/DashComponents/DashboardHeader";
import Script from "next/script";
import { clearState } from "@/redux/features/profile/profile-slice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import TradingViewTicker from "@/components/TradindViewTicker";

export const ThemeContext = createContext({});

const Template = ({ children }) => {
  const dispatch = useDispatch();
  const [showShowSidebar, setShowSidebar] = useState(false);

  const pathname = usePathname();

  const router = useRouter();

  const { profile, profileLoader } = useSelector((state) => state.profile);

  // const [windowWidth, setWindowWidth] = useState(null);
  // const [windowHeight, setWindowHeight] = useState(null);

  console.log(profile, "steps");

  useEffect(() => {
    const getToken = localStorage?.getItem("token");
    console.log(getToken, "season");

    if (!getToken) {
      router.push("/");
    } else {
      // if (Object.keys(profile).length === 0) {
      dispatch(getProfile());
      dispatch(getWallet());
      // }
    }
  }, []);

  const handleShowSidebar = () => {
    setShowSidebar(!showShowSidebar);
    // showShowSidebar = true;
  };

  const handleLogout = () => {
    dispatch(clearState());
    localStorage.removeItem("token");
    window.location.href = "/sign-in";
  };

  // useLayoutEffect(() => {
  //   setWindowWidth(window.innerWidth);
  //   setWindowHeight(window.innerHeight);

  //   // Add event listener for resize (optional)
  //   window.addEventListener("resize", () => {
  //     setWindowWidth(window.innerWidth);
  //     setWindowHeight(window.innerHeight);
  //   });

  //   return () => window.removeEventListener("resize", () => {}); // Cleanup function
  // }, []);

  // console.log(pathname, "solve");

  return (
    <>
      <head>
        <link rel="stylesheet" href="/assets/css/core/libs.min.css" />
        <link rel="stylesheet" href="/assets/css/coinex.min862f.css?v=4.1.0" />
        <link rel="stylesheet" href="/assets/css/custom.min862f.css?v=4.1.0" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com/" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin /> */}
      </head>

      <SideBar handleHideSidebar={handleShowSidebar} show={showShowSidebar} />
      <main className="main-content">
        <div className="position-relative">
          <DashboardHeader
            handleLogout={handleLogout}
            handleShowSidebar={handleShowSidebar}
          />
          <div className="custom-container custom-pad-container">
            {profileLoader ? <LoaderScreen /> : children}
          </div>

          {/* {children} */}
        </div>
        {/* <TradingViewTicker /> */}
      </main>

      <ToastContainer />
      {/* <Script src="/assets/js/core/libs.min.js"></Script> */}
      <Script src="/assets/vendor/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/libs.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/app.js" strategy="afterInteractive" />
    </>
  );
};

export default Template;
