"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  getWallet,
  getPlans,
} from "@/redux/features/profile/profile_service_syn";
import { FaCheck } from "react-icons/fa6";

const PlansDisplay = () => {
  const dispatch = useDispatch();
  const { plans, gettingPlans, getPlansSuccess, getPlansError, wallet } =
    useSelector((state) => state.profile);
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <Slider {...settings} className="row">
      {plans?.map((plan, key) => (
        <div className="col-lg-4 col-sm-6 col-md-6  text-center">
          <div style={{ height: "520px" }} className="card " key={key}>
            <div>
              <img
                src="/icons/BitcoinIcon4.png"
                alt="Bitcoin Icon"
                className="card-img mx-auto"
                style={{ width: "50px" }}
              />
            </div>
            <div className="card-body d-flex flex-column items-start justify-between ">
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
                  <span className="text-[#f9b707] text-[25px] ">
                    {plan?.percent}%
                  </span>{" "}
                  <span>Weekly ROI</span>
                </h6>
              </div>
              <div>
                <h2 className="card-title">
                  From $ {plan?.amount} to ${" "}
                  {plan?.max > 100000 ? "Unlimited" : plan?.max}
                </h2>
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
              {/* <p className="card-text">
                {" "}
                Enjoy your investment with Bitcoin and Ethereum growing every
                day.
              </p> */}

              <a
                href={`/dashboard/investment-plans/${plan?.plan}`}
                className="btn btn-primary w-[100%] ">
                Invest now
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PlansDisplay;
