"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  getProfile,
  getWallet,
  getPlans,
} from "@/redux/features/profile/profile_service_syn";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa6";

const HomePlansDisplay = () => {
  const dispatch = useDispatch();
  const { plans, gettingPlans, getPlansSuccess, getPlansError, wallet } =
    useSelector((state) => state.profile);
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    // autoplaySpeed: 1000,
    // cssEase: "linear",
    swipeToSlide: true,
    centerPadding: "60px",
    className: "center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          swipeToSlide: true,
          centerPadding: "60px",
          className: "center",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          centerPadding: "60px",
          className: "center",
        },
      },
    ],
  };

  useEffect(() => {
    dispatch(getPlans());
  }, []);
  console.log(plans, "plans");
  return (
    <div className="row gy-6 gy-xxl-0">
      {plans?.map((plan, key) => (
        <div className="col-md-3  col-xxl-3">
          <div
            className="provide-world__card nb3-bg hover:bg-amber-100 text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9"
            style={{ height: "550px" }}
            key={key}>
            <div className=" mb-5 ">
              <img
                src="/icons/BitcoinIcon4.png"
                alt="Bitcoin Icon"
                className="card-img mx-auto"
                style={{ width: "30px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              className="card-body ">
              <div className=" w-[100%] ">
                <h6
                  className="card-title w-[100%] "
                  style={{
                    textTransform: "uppercase",
                    textAlign: "center",
                    color: "#fff",
                  }}>
                  {plan?.plan}
                </h6>

                <h6 style={{ color: "#fff" }} className="card-title my-2 ">
                  <p
                    style={{ fontSize: "20px" }}
                    className="plan-card-colored-text">
                    {plan?.percent}%
                  </p>{" "}
                  <span>Weekly ROI</span>
                </h6>
              </div>
              <div>
                <h5 className="card-title mt-3 ">
                  From $ {plan?.amount} to ${" "}
                  {plan?.max > 100000 ? "Unlimited" : plan?.max}
                </h5>
                <p>{plan?.terms}</p>
              </div>
              <br />
              <ul>
                {plan?.benefits?.map((benefit, index) => (
                  <p
                    key={index}
                    // style={{ color: "#fff" }}
                    className="text-left d-flex items-center hover:text-[#000] gap-[0.5rem] card-tex">
                    <FaCheck
                      // color="#f9b707"
                      className="plan-card-colored-text"
                    />
                    {benefit}
                  </p>
                ))}
              </ul>
              <a href={`/sign-in`} className=" mt-6 btn btn-secondary">
                Invest now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePlansDisplay;
