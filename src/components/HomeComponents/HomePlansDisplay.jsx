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
    <Slider {...settings} className="row gy-6 gy-xxl-0">
      {plans?.map((plan, key) => (
        <div className="col-md-3  col-xxl-3">
          <div
            className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9"
            key={key}>
            <div className=" my-5 ">
              <img
                src="/icons/BitcoinIcon4.png"
                alt="Bitcoin Icon"
                className="card-img mx-auto"
                style={{ width: "50px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "350px",
              }}
              className="card-body ">
              <div className=" w-[100%] ">
                <h6
                  className="card-title w-[100%] "
                  style={{
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}>
                  {plan?.plan}
                </h6>

                <h6 className="card-title ">
                  <span style={{ color: "#f9b707", fontSize: "20px" }}>
                    {plan?.percent}%
                  </span>{" "}
                  <span>Weekly ROI</span>
                </h6>
              </div>
              <div>
                <h4 className="card-title">
                  From $ {plan?.amount} to ${" "}
                  {plan?.max > 100000 ? "Unlimited" : plan?.max}
                </h4>
                <p>{plan?.terms}</p>
              </div>

              <ul>
                {plan?.benefits?.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-left d-flex items-center gap-[0.5rem] card-tex">
                    <FaCheck color="#f9b707" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <a href={`/sign-in`} className=" mt-6 btn btn-secondary">
                Invest now
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HomePlansDisplay;
