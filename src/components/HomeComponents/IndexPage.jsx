"use client";

import React from "react";

import TradingViewWidget from "../Widgets/TradingViewWidget";
import CryptoWaveChart from "../Widgets/CryptoWaveChart";
import HomePlansDisplay from "./HomePlansDisplay";
import StartInvestment from "./ReadyToStart";
import ReferralBonusSection from "./ReferralBonus";
import PlatformStats from "./PlatformStats";
import TestimonialsCards from "./TestimonialCarousel";
import TestimonialsMarquee from "./TestimonialsMarquee";

const IndexPage = () => {
  return (
    <>
      <div>
        {/* hero section start */}
        <section className="hero-section position-relative z-0">
          <div
            className="animation position-absolute top-0 left-0 w-100 h-100 z-n1"
            data-aos="fade-left"
            data-aos-delay="150">
            <img
              src="/new-assets/images/hero_vector.png"
              alt="vector"
              className="position-absolute d-none d-xxxl-flex bottom-0 end-0 previewShapeRevX"
            />
          </div>

          <div className="container pt-20 mt-12 mt-lg-20">
            <div className="row pt-4 pt-lg-10 gy-12 gy-lg-0 justify-content-center justify-content-lg-between align-items-center">
              <div className="col-lg-6 col-xxl-7" data-aos="fade-up">
                <div className="hero-card p1-xxl-bg pt-xl-20 pb-xl-20 position-relative">
                  <div className="pt-xxl-10 pb-xxl-10">
                    <div className="circle-text first d-center cus-z1 position-absolute end-0 top-0 d-none d-xxl-flex me-lg-10 mt-lg-10">
                      <div className="text d-center">
                        <p className="fs-six">Invest Smarter, Grow Crypto</p>
                      </div>
                      <img
                        src="/new-assets/images/circle_star.png"
                        alt="star"
                        className="push_animat"
                      />
                    </div>

                    <span className="heading p1-max-xxl nb4-xxl-color fs-five mb-3">
                      Crypto investing made simple
                    </span>

                    <h1 className="display-tw nb4-xxl-color mb-5 mb-lg-6">
                      Auto-invest and trade Bitcoin and top crypto
                    </h1>

                    <p className="fs-six-up fw_500 nb4-xxl-color">
                      Choose automated plans or trade on live charts. Fund your
                      wallet, pick a strategy, and track performance in real
                      time.
                    </p>

                    <div className="d-inline-flex flex-wrap gap-4 gap-lg-10 align-items-center mt-8 mt-lg-10">
                      <a
                        href="/sign-up"
                        className="cmn-btn alt-xxl-bg fs-five nb4-xxl-bg gap-2 gap-lg-3 align-items-center py-2 px-5 py-lg-3 px-lg-6">
                        Start investing <i className="ti ti-trending-up" />
                      </a>
                      <a
                        href="#plans"
                        className="cmn-btn link link-xxl-color fs-five gap-2 gap-lg-3 align-items-center">
                        <i className="ti ti-arrow-narrow-right fs-four" /> View
                        plans
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-sm-10 col-lg-6 col-xxl-5"
                data-aos="fade-up"
                data-aos-delay="100">
                <div className="hero-section__thumbs pb-xxl-10">
                  <img
                    src="/new-assets/images/hero_thumb.png"
                    className="max-auto max-xxl-un"
                    alt="Crypto dashboard"
                  />
                </div>
              </div>

              <ul className="list_items col-12 d-flex row-gap-6 gap-lg-15 justify-content-between flex-wrap pt-2 pt-lg-15 pt-xl-2 pt-xxl-15 pb-15">
                {[
                  {
                    icon: "ti-shield-check",
                    text: "Secure wallet and custody",
                  },
                  {
                    icon: "ti-chart-arcs",
                    text: "Auto-invest (DCA) strategies",
                  },
                  { icon: "ti-broadcast", text: "Real-time market data" },
                  {
                    icon: "ti-coin-bitcoin",
                    text: "24/7 deposits and withdrawals",
                  },
                ].map((it, i) => (
                  <li
                    key={it.text}
                    className="d-flex gap-3 align-items-center"
                    data-aos="fade-up"
                    data-aos-delay={i * 100}>
                    <span className="d-center s1-bg p-3 p-lg-4 rounded-circle">
                      <i className={`ti ${it.icon} fs-three nb4-color`} />
                    </span>
                    <h6 className="nw1-color">{it.text}</h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* hero section end */}

        {/* quick market pulse */}
        <div className="my-4" data-aos="fade-up">
          <CryptoWaveChart symbol="BINANCE:ETHUSDT" height={220} />
        </div>

        {/* ready to start / CTA tiles */}
        <div data-aos="fade-up" data-aos-offset="120">
          <StartInvestment />
        </div>

        {/* NEW: How it works */}
        <section className="pt-120 pb-120 position-relative z-0">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-lg-8 col-xxl-7 text-center"
                data-aos="fade-up">
                <span className="heading p1-color fs-five mb-5 d-inline-block">
                  How it works
                </span>
                <h3 className="mb-5 mb-lg-6">Start in minutes</h3>
                <p className="fs-six-up mx-ch mx-auto">
                  Fund your wallet, choose an automated plan, or place trades
                  directly from live charts.
                </p>
              </div>
            </div>

            <div className="row gy-6 gy-lg-0 mt-10">
              {[
                {
                  title: "Create & verify",
                  desc: "Sign up and complete KYC for secure access.",
                  icon: "person-check",
                },
                {
                  title: "Fund your wallet",
                  desc: "Deposit crypto or stablecoins, 24/7.",
                  icon: "wallet",
                },
                {
                  title: "Invest or Trade",
                  desc: "Pick a plan (DCA/rebalance) or use our charts.",
                  icon: "rocket",
                },
              ].map((s, i) => (
                <div
                  key={s.title}
                  className="col-md-4"
                  data-aos="zoom-in"
                  data-aos-delay={i * 150}>
                  <div className="nb3-bg cus-rounded-1 text-center py-8 px-6 h-100">
                    <div className="d-center col-2 nb4-bg rounded-circle p-4 mx-auto">
                      <i
                        className={`bi bi-${s.icon} fs-three p1-color`}
                        aria-hidden="true"
                      />
                    </div>
                    <h5 className="mt-5 mb-3">{s.title}</h5>
                    <p className="mx-ch">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Crypto With Us */}
        <section className="why-trade s1-bg alt-color position-relative z-0">
          <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
            <img
              src="/new-assets/images/sun.png"
              alt="vector"
              className="position-absolute push_animat"
            />
            <img
              src="/new-assets/images/star.png"
              alt="vector"
              className="position-absolute d-xxxl-flex previewSkew"
            />
          </div>
          <div className="container">
            <div className="row gy-3 gy-lg-0 justify-content-center">
              <div className="col-sm-7 col-lg-6 col-xxl-5 order-2 order-lg-0">
                <div className="why-trade__thumbs h-100 d-flex align-items-end ps-20 ps-sm-5 ps-lg-0">
                  <img
                    src="/new-assets/images/why_trade.png"
                    alt="Crypto apps preview"
                    data-aos="fade-right"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-xxl-7">
                <div className="row pt-120 pb-120">
                  <div className="col-xxl-6 offset-xxl-2">
                    <div className="why-trade__part" data-aos="zoom-in-up">
                      <span className="heading fs-five">Why choose</span>
                      <h3 className="mb-3 mt-5">World Coin AI Trading</h3>
                      <p>
                        We focus on simple, automated crypto investing backed by
                        real-time tools. Set an allocation, schedule auto-buys,
                        and track everything in one place.
                      </p>
                      <a
                        href="/about-us"
                        className="cmn-btn link secondary-link fs-six-up gap-2 gap-lg-3 align-items-center mt-5">
                        Learn more{" "}
                        <i className="ti ti-arrow-narrow-right fs-four" />
                      </a>
                    </div>
                  </div>

                  <div className="col-xxl-12 mt-7 mt-md-8 mt-xxl-3">
                    <div
                      className="why-trade__part d-flex align-items-center"
                      data-aos="fade-up"
                      data-aos-delay="100">
                      <div className="vector d-none d-xxl-flex px-xxl-15">
                        <img
                          src="/new-assets/images/trade_vector.png"
                          alt="Vector"
                          className="max-xxl-un"
                          data-aos="fade-up-right"
                          data-aos-delay="150"
                        />
                      </div>
                      <div className="content" data-aos="fade-up-left">
                        <h3 className="mb-3">
                          Built for long-term crypto growth
                        </h3>
                        <p>
                          Use automated DCA, portfolio rebalancing, and price
                          alerts. Trade when you want, or let your plan run on
                          schedule.
                        </p>
                        <a
                          href="/about-us"
                          className="cmn-btn link secondary-link fs-six-up gap-2 gap-lg-3 align-items-center mt-5">
                          How it works{" "}
                          <i className="ti ti-arrow-narrow-right fs-four" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Markets */}
        <section
          className="w-full py-10"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <TradingViewWidget />
        </section>

        {/* NEW: Featured assets */}
        <section className="pt-50 pb-50 position-relative z-0">
          <div className="container">
            <div
              className="d-flex flex-wrap justify-content-between align-items-end mb-8"
              data-aos="fade-up">
              <div>
                <span className="heading p1-color fs-five mb-3 d-inline-block">
                  Featured assets
                </span>
                <h4>Track top coins at a glance</h4>
              </div>
              <a href="/market-data" className="cmn-btn link fs-six-up">
                Go to Market <i className="ti ti-arrow-right" />
              </a>
            </div>

            <div className="row gy-6">
              {[
                {
                  sym: "BTC",
                  name: "Bitcoin",
                  img: "/icons/btc.png",
                },
                {
                  sym: "ETH",
                  name: "Ethereum",
                  img: "/icons/eth 2.png",
                },
                {
                  sym: "SOL",
                  name: "Solana",
                  img: "/icons/sol.png",
                },
                {
                  sym: "XRP",
                  name: "XRP",
                  img: "/icons/xrp.png",
                },
              ].map((c, i) => (
                <div
                  key={c.sym}
                  className="col-6 col-md-3"
                  data-aos="zoom-in"
                  data-aos-delay={i * 120}>
                  <a
                    href="/market-data"
                    className="d-block nb3-bg cus-rounded-1 p-5 h-100">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={c.img}
                        alt={`${c.name} logo`}
                        width="36"
                        height="36"
                      />
                      <div>
                        <h6 className="mb-1">{c.name}</h6>
                        <span className="fs-seven fw_500">{c.sym}</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                      <span className="fs-seven">24h</span>
                      <span className="fs-seven s1-color">Live</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Provide World / Social Proof */}
        <section className="provide-world bg nb4-bg pt-120 pb-120 position-relative z-0">
          <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1 d-none d-md-flex">
            <img
              src="/new-assets/images/button.png"
              alt="vector"
              className="position-absolute pt-6 pt-xl-15 previewShapeRevX"
            />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-lg-8 col-xxl-7"
                data-aos="fade-up"
                data-aos-offset="120">
                <div className="heading__content mb-10 mb-lg-15 text-center">
                  <span className="heading p1-color fs-five mb-5">
                    Trusted by investors
                  </span>
                  <h3 className="mb-5 mb-lg-6">
                    Join <span className="s1-color">480,000+</span> crypto users
                  </h3>
                  <p className="fs-six-up mx-ch mx-auto">
                    Invest in Bitcoin, Ethereum, and other leading assets with
                    clear fees and powerful tools that fit your style.
                  </p>
                </div>
              </div>
            </div>
            <div className="row gy-6 gy-xxl-0">
              {[
                {
                  title: "Security first",
                  desc: "Two-factor security, wallet controls, and withdrawal checks.",
                  icon: "ti-lock",
                },
                {
                  title: "480,000+ clients",
                  desc: "Beginner friendly onboarding with advanced tools for pros.",
                  icon: "ti-users",
                },
                {
                  title: "Real-time insights",
                  desc: "Track prices, set alerts, and monitor your portfolio live.",
                  icon: "ti-chart-line",
                },
              ].map((card, i) => (
                <div
                  className="col-md-6 col-xxl-4"
                  key={card.title}
                  data-aos="zoom-in-up"
                  data-aos-delay={i * 150}>
                  <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9 h-100">
                    <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                      <i className={`ti ${card.icon} fs-three p1-color`} />
                    </span>
                    <h4 className="mt-5 mb-5">{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trade / Features */}
        <section className="trade_on a2-bg pt-120 pb-120 position-relative z-0">
          <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
            <img
              src="/new-assets/images/coin.png"
              alt="vector"
              className="position-absolute d-none d-md-flex previewShapeRevX"
            />
            <img
              src="/new-assets/images/star2.png"
              alt="vector"
              className="position-absolute d-none d-xl-flex push_animat"
            />
            <img
              src="/new-assets/images/coin_vector.png"
              alt="vector"
              className="position-absolute d-none d-xxxl-flex bottom-0 end-0 previewShapeRevX opacity-50"
            />
          </div>
          <div className="container">
            <div className="row gy-10 gy-xxl-0 justify-content-center justify-content-xxl-between align-items-center">
              <div className="col-lg-6 col-xxl-5" data-aos="fade-right">
                <div className="trade_on__content">
                  <span className="heading s1-color fs-five mb-5">
                    Invest with
                  </span>
                  <h3 className="mb-4 mb-lg-5">World-class crypto tools</h3>
                  <p className="fs-six mx-ch">
                    Build a diversified crypto portfolio with auto-invest,
                    rebalancing, and deep market data.
                  </p>
                  <ul className="d-flex gap-4 flex-column mt-6">
                    {[
                      "Auto-invest (DCA) and scheduled buys",
                      "Portfolio rebalancing and allocation targets",
                      "Price alerts and market dashboards",
                      "24/7 deposits and withdrawals",
                    ].map((li) => (
                      <li
                        key={li}
                        className="d-flex align-items-center gap-3 fs-six-up">
                        <i className="ti ti-circle-check s1-color fs-four" />
                        {li}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/sign-up"
                    className="cmn-btn secondary-alt fs-six-up nb4-xxl-bg gap-2 gap-lg-3 align-items-center py-2 px-5 py-lg-3 px-lg-6 mt-7 mt-xxl-8">
                    Sign up now <i className="ti ti-arrow-right fs-four" />
                  </a>
                </div>
              </div>
              <div className="col-md-8 col-lg-6" data-aos="fade-left">
                <div className="trade_on__thumbs d-flex justify-content-end">
                  <img src="/new-assets/images/trade_on.png" alt="Trading UI" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education + Stats */}
        <section className="people_trust pt-120 pb-120 position-relative z-0">
          <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
            <img
              src="/new-assets/images/vector.png"
              alt="vector"
              className="position-absolute jello d-none d-xl-flex"
            />
            <img
              src="/new-assets/images/star3.png"
              alt="vector"
              className="position-absolute push_animat d-none d-xxxl-flex"
            />
            <img
              src="/new-assets/images/vector3.png"
              alt="vector"
              className="position-absolute bottom-0 end-0 d-none d-xxxl-flex"
            />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-xl-8 col-xxl-7"
                data-aos="fade-up"
                data-aos-offset="120">
                <div className="heading__content mb-8 mb-lg-10 text-center">
                  <span className="heading p1-color fs-five mb-5">
                    Learn and grow
                  </span>
                  <h3 className="mb-4 mb-lg-6">Build confidence in crypto</h3>
                  <p className="fs-six-up mx-ch mx-auto">
                    Short videos and guides to help you understand volatility,
                    risk, and long-term strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* keep your existing tabs/content */}
            <div className="row">
              <div className="col-12" data-aos="fade-up">
                <div className="singletab">
                  <ul className="tablinks d-center flex-wrap gap-3 gap-lg-4 mb-10 mb-xxl-15">
                    <li className="nav-links active">
                      <button className="tablink cmn-btn outline_btn align-items-center fs-six-up py-2 py-lg-3 px-6 px-md-3 px-xxl-10 d-flex gap-3 align-items-center">
                        <i className="ti ti-video fs-four s1-color" />
                        Crypto Basics
                      </button>
                    </li>
                    <li className="nav-links">
                      <button className="tablink cmn-btn outline_btn align-items-center fs-six-up py-2 py-lg-3 px-6 px-md-3 px-xxl-10 d-flex gap-3 align-items-center">
                        <i className="ti ti-video fs-four s1-color" />
                        Risk & Security
                      </button>
                    </li>
                    <li className="nav-links">
                      <button className="tablink cmn-btn outline_btn align-items-center fs-six-up py-2 py-lg-3 px-6 px-md-3 px-xxl-10 d-flex gap-3 align-items-center">
                        <i className="ti ti-video fs-four s1-color" />
                        Market Walkthroughs
                      </button>
                    </li>
                  </ul>

                  <div className="tabcontents">
                    <div className="tabitem active">
                      <div className="row gy-10 gy-xl-0 justify-content-center justify-content-lg-between align-items-center">
                        <div
                          className="col-xl-6 col-xxl-7"
                          data-aos="fade-right">
                          <div className="people_trust_thumb d-center p-2 p-lg-5 pseudo_element_after overflow-hidden">
                            <img
                              src="/new-assets/images/people_trust_video.png"
                              className="w-100 max-xxl-un cus-rounded-2"
                              alt="Video"
                            />
                            <a
                              href="https://www.youtube.com/watch?v=BHACKCNDMW8"
                              className="popup-video box_10 btn-popup-animation position-absolute d-center rounded-circle">
                              <i className="fa-solid fa-play fs-four" />
                            </a>
                          </div>
                        </div>
                        <div
                          className="col-xl-6 col-xxl-5"
                          data-aos="fade-left">
                          <div className="trade_on__content">
                            <h4 className="mb-4">What you will learn</h4>
                            <p className="mx-ch">
                              How DCA works, how to pick allocations, and how to
                              handle crypto market swings.
                            </p>
                            <ul className="list_divided d-flex flex-wrap gap-5 mt-5 mt-xxl-6">
                              {[
                                "Long-term crypto mindset",
                                "Wallet security basics",
                                "Using alerts and plans",
                                "Rebalancing 101",
                              ].map((x) => (
                                <li
                                  key={x}
                                  className="d-flex align-items-center gap-3 fs-six-up">
                                  <i className="ti ti-circle-check s1-color fs-four" />
                                  {x}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* add more tabitems if you wire tabs */}
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="container mt-5" data-aos="fade-up">
              <PlatformStats />
            </div>
          </div>
        </section>

        {/* Plans */}
        <section
          id="plans"
          className="provide-world bg nb4-bg pt-120 pb-120 position-relative z-0">
          <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1 d-none d-md-flex">
            <img
              src="/new-assets/images/button.png"
              alt="vector"
              className="position-absolute pt-6 pt-xl-15 previewShapeRevX"
            />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xxl-7" data-aos="fade-up">
                <div className="heading__content mb-10 mb-lg-15 text-center">
                  <span className="heading p1-color fs-five mb-5">
                    Flexible crypto plans
                  </span>
                  <h3 className="mb-5 mb-lg-6">
                    Pick a strategy that fits your goals
                  </h3>
                  <p className="fs-six-up mx-ch mx-auto">
                    Auto-invest weekly or monthly, diversify across coins, and
                    adjust anytime. No lock-ins.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <HomePlansDisplay />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonial p1-bg pt-120 pb-120 position-relative z-0">
          <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
            <img
              src="/new-assets/images/star.png"
              alt="vector"
              className="position-absolute push_animat"
            />
            <img
              src="/new-assets/images/vector2.png"
              alt="vector"
              className="position-absolute bottom-0 start-0 d-none d-xxxl-flex"
            />
            <img
              src="/new-assets/images/sun.png"
              alt="vector"
              className="position-absolute push_animat d-none d-xxl-flex"
            />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xxl-7" data-aos="fade-up">
                <div className="heading__content alt-color mb-10 mb-lg-15 text-center">
                  <span className="heading fs-five mb-5">Testimonials</span>
                  <h3>What our users say</h3>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-12">
                <TestimonialsMarquee speed={38} />
                {/* <TestimonialsCards /> */}
                <div className="swiper common-slider1 cus-rounded-1 d-center align-items-end align-items-xxl-center">
                  <div className="swiper-wrapper">
                    {/* your existing slides */}
                    {/* ... */}
                  </div>

                  <div className="slider-btn position-absolute justify-content-end d-center justify-content-xxl-between gap-2 w-100 pb-3 pb-sm-5 pb-xxl-0 px-8 px-sm-18 px-xl-12 px-xxl-18">
                    <button
                      type="button"
                      aria-label="Slide Prev"
                      className="ara-prev slide-button cmn-btn2 d-center">
                      <i className="ti ti-arrow-narrow-right" />
                    </button>
                    <button
                      type="button"
                      aria-label="Slide Next"
                      className="ara-next slide-button cmn-btn2 d-center">
                      <i className="ti ti-arrow-narrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="blog_news pt-120 pb-120 position-relative z-0">
          <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
            <img
              src="/new-assets/images/star.png"
              alt="vector"
              className="position-absolute"
            />
            <img
              src="/new-assets/images/vector2.png"
              alt="vector"
              className="position-absolute bottom-0 start-0"
            />
            <img
              src="/new-assets/images/sun.png"
              alt="vector"
              className="position-absolute"
            />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="heading__content d-flex row-gap-7 gap-20 flex-wrap justify-content-between align-items-center mb-10 mb-lg-15"
                data-aos="fade-up">
                <div className="heading__part">
                  <span className="heading s1-color fs-five mb-5">Blog</span>
                  <h3>News &amp; Analysis</h3>
                </div>
                <a
                  href="/blog"
                  className="cmn-btn link fs-six-up gap-2 gap-lg-3 align-items-center">
                  See all <i className="ti ti-arrow-right fs-four" />
                </a>
              </div>
            </div>
            <div className="row gy-6">
              {[
                {
                  img: "/new-assets/images/blog_news.png",
                  tag: "News",
                  title: "How DCA Works in Crypto",
                },
                {
                  img: "/new-assets/images/blog_news2.png",
                  tag: "Features",
                  title: "Rebalancing Your Crypto Portfolio",
                },
                {
                  img: "/new-assets/images/blog_news3.png",
                  tag: "News",
                  title: "Managing Volatility in Crypto",
                },
              ].map((b, i) => (
                <div
                  className="col-md-6 col-xxl-4"
                  key={b.title}
                  data-aos="fade-up"
                  data-aos-delay={i * 120}>
                  <div className="blog_news__card nb3-bg cus-rounded-1 overflow-hidden">
                    <div className="blog_news__thumbs position-relative">
                      <img src={b.img} alt="Image" className="w-100" />
                      <span className="border border-color second nw1-color fs-seven rounded-3 position-absolute top-0 end-0 py-1 px-3 mt-5 me-5">
                        {b.tag}
                      </span>
                    </div>
                    <div className="blog_news__content py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
                      <a href="/blog">
                        <h5 className="mb-4 mb-lg-5">{b.title}</h5>
                      </a>
                      <div className="fs-seven fw_500 d-flex row-gap-0 flex-wrap gap-3 mb-4 mb-lg-5">
                        August 17, 2023 <span>|</span> Written by Jason Turner
                      </div>
                      <p>Quick, practical insights for better crypto habits.</p>
                      <a
                        href="/blog"
                        className="link fs-five fw-semibold d-flex gap-2 gap-lg-3 align-items-center mt-6 mt-lg-8">
                        Continue Reading <i className="ti ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pt-20 pb-20 position-relative z-0">
          <div className="container">
            <div
              className="nb3-bg cus-rounded-1 p-6 p-lg-10 d-flex flex-column flex-lg-row align-items-center justify-content-between"
              data-aos="zoom-in">
              <div className="mb-6 mb-lg-0">
                <h4 className="mb-2">Ready to build your crypto portfolio?</h4>
                <p className="mb-0">
                  Get started in minutes with automated plans and real-time
                  charts.
                </p>
              </div>
              <div className="d-flex gap-3">
                <a href="/sign-up" className="cmn-btn p-2 ">
                  Create account
                </a>
                <a href="/market-data" className="cmn-btn outline_btn p-2 ">
                  See markets
                </a>
              </div>
            </div>
          </div>
        </section>

        <ReferralBonusSection />
      </div>
    </>
  );
};

export default IndexPage;
