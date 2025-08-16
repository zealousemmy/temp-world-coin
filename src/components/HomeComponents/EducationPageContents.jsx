"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import FAQSection from "./FaqContents";

const EducationPageContents = () => {
  // Initialize AOS once on mount
  useEffect(() => {
    let AOSlib;
    const load = async () => {
      const AOS = (await import("aos")).default;
      AOSlib = AOS;
      AOS.init({
        duration: 700,
        offset: 80,
        easing: "ease-out-cubic",
        once: false,
      });
      setTimeout(() => AOS.refreshHard(), 300);
    };
    load();
    return () => AOSlib?.refreshHard();
  }, []);

  return (
    <>
      <div>
        {/* banner section start*/}
        <section className="banner-section pt-120 pb-120">
          <div className="container mt-10 mt-lg-0 pt-15 pt-lg-20 pb-5 pb-lg-0">
            <div className="row">
              <div className="col-12 breadcrumb-area ">
                <h2 className="mb-4" data-aos="fade-up">
                  Education
                </h2>
                <nav
                  aria-label="breadcrumb"
                  data-aos="fade-up"
                  data-aos-delay="120">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li
                      className="breadcrumb-item ms-2 ps-7 active"
                      aria-current="page">
                      <span>Education</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* banner section end */}

        {/* Hero / Intro */}
        <section className="trade_on trade_on--secondary pt-120 pb-120 position-relative z-0">
          <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
            <img
              src="/new-assets/images/star3.png"
              alt="vector"
              className="position-absolute push_animat d-none d-xxxl-flex top-0 start-0 pt-lg-16 ps-20 ms-lg-8"
            />
            <img
              src="/new-assets/images/sun2.png"
              alt="vector"
              className="sun2 position-absolute push_animat d-none d-xxl-flex bottom-0 pb-120"
            />
          </div>
          <div className="container">
            <div className="row gy-10 gy-xxl-0 justify-content-center justify-content-xxl-between align-items-center">
              <div
                className="col-10 col-sm-8 col-md-7 col-lg-6 order-2 order-lg-0"
                data-aos="fade-left">
                <div className="trade_on__thumbs d-flex justify-content-end">
                  <img src="/new-assets/images/education.png" alt="Imgae" />
                </div>
              </div>
              <div
                className="col-md-10 col-lg-6 col-xxl-5"
                data-aos="fade-right">
                <div className="trade_on__content">
                  <span className="heading p1-color fs-six mb-5">
                    Trader Academy
                  </span>
                  <h4 className="mb-4 mb-lg-5">
                    Investing in Knowledge — Your Edge in Crypto
                  </h4>
                  <p className="mx-ch">
                    Learn crypto from first principles: wallets, networks,
                    market structure, risk, and strategy. Bite-sized lessons,
                    real charts, and practical exercises to help you trade and
                    invest with confidence.
                  </p>
                  <div className="d-flex gap-3 align-items-center mt-5 mt-lg-6">
                    <span className="s1-bg py-1 px-2 rounded-4 fs-seven nb4-color">
                      Learn
                    </span>
                    <i className="ti ti-arrow-narrow-right p1-color fs-four" />
                    <span className="s1-bg py-1 px-2 rounded-4 fs-seven nb4-color ms-1">
                      Practice
                    </span>
                    <i className="ti ti-arrow-narrow-right p1-color fs-four" />
                    <span className="s1-bg py-1 px-2 rounded-4 fs-seven nb4-color ms-1">
                      Apply
                    </span>
                  </div>
                  <a
                    href="/sign-up"
                    className="cmn-btn fs-six-up nb4-xxl-bg gap-2 align-items-center py-2 px-4 py-lg-3 px-lg-5 mt-7 mt-xxl-8">
                    Start Learning <i className="ti ti-arrow-right fs-four" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="provide-world pt-120 pb-120 position-relative z-0">
          <div className="container">
            <div className="row justify-content-center mb-10 mb-lg-15">
              <div className="col-lg-8 text-center" data-aos="fade-up">
                <span className="heading s1-color fs-five mb-5">
                  Learning Paths
                </span>
                <h3>Choose your level and go</h3>
                <p className="fs-six-up mt-3 mx-auto" style={{ maxWidth: 760 }}>
                  Follow a curated path or cherry-pick lessons. Each path
                  includes quizzes, worksheets, and reading lists.
                </p>
              </div>
            </div>
            <div className="row gy-6 gy-xxl-0">
              {[
                {
                  icon: "ti ti-users-group",
                  title: "Beginner: Crypto Basics",
                  text: "Learn wallets, seed phrases, exchanges vs. DEXs, network fees, stablecoins, and security hygiene.",
                  bullets: [
                    "Wallet setup",
                    "Deposits/withdrawals",
                    "Spot trading 101",
                  ],
                  delay: 0,
                },
                {
                  icon: "ti ti-tool",
                  title: "Intermediate: Market Skills",
                  text: "Dive into order types, market microstructure, trend & momentum, support/resistance, and position sizing.",
                  bullets: [
                    "Risk management",
                    "Technical indicators",
                    "Trading plan",
                  ],
                  delay: 80,
                },
                {
                  icon: "ti ti-brand-stackshare",
                  title: "Advanced: Strategies",
                  text: "Momentum/mean-reversion, event-driven approaches, portfolio construction, and tax-aware rebalancing.",
                  bullets: [
                    "Backtesting basics",
                    "Strategy rules",
                    "Performance tracking",
                  ],
                  delay: 120,
                },
              ].map((c) => (
                <div
                  className="col-md-6 col-xxl-4"
                  key={c.title}
                  data-aos="zoom-in"
                  data-aos-delay={c.delay}>
                  <div className="provide-world__card secondary nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9 h-100">
                    <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                      <i className={`${c.icon} fs-three p1-color`} />
                    </span>
                    <h4 className="mt-5 mb-3">{c.title}</h4>
                    <p>{c.text}</p>
                    <ul
                      className="mt-4 d-flex flex-column gap-2 text-start mx-auto"
                      style={{ maxWidth: 360 }}>
                      {c.bullets.map((b) => (
                        <li
                          key={b}
                          className="d-flex align-items-center gap-2 fs-six-up">
                          <i className="ti ti-check s1-color" /> {b}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/sign-up"
                      className="cmn-btn link third-link fs-five gap-2 align-items-center mt-6 inline-flex">
                      Enter Path <i className="ti ti-arrow-narrow-right" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Topics */}
        <section className="a2-bg pt-120 pb-120 position-relative z-0">
          <div className="container">
            <div className="row justify-content-between align-items-center mb-10 mb-lg-15">
              <div className="col-xl-6" data-aos="fade-up">
                <span className="heading p1-color fs-five">
                  Featured Topics
                </span>
                <h3 className="mt-4">Master the pillars of crypto investing</h3>
              </div>
              <div className="col-xl-5" data-aos="fade-up" data-aos-delay="100">
                <p className="fs-six-up">
                  Short lessons you can complete in under 10 minutes. Each topic
                  includes examples and a quick quiz to check understanding.
                </p>
              </div>
            </div>
            <div className="row g-6">
              {[
                {
                  icon: "ti ti-wallet",
                  title: "Wallet Security",
                  text: "Seed phrases, hardware wallets, and common attack vectors.",
                },
                {
                  icon: "ti ti-arrows-exchange-2",
                  title: "On-chain vs Off-chain",
                  text: "Understanding bridges, custody, and settlement risk.",
                },
                {
                  icon: "ti ti-chart-candle",
                  title: "Technical Indicators",
                  text: "RSI, MACD, MAs and how to avoid indicator overload.",
                },
                {
                  icon: "ti ti-currency-bitcoin",
                  title: "Tokenomics 101",
                  text: "Supply schedules, incentives, emissions, and unlocks.",
                },
                {
                  icon: "ti ti-badge-ad",
                  title: "Narratives & Cycles",
                  text: "Halvings, liquidity cycles, and sector rotations.",
                },
                {
                  icon: "ti ti-lego",
                  title: "DeFi Primitives",
                  text: "AMMs, lending, staking and yield basics—risks included.",
                },
              ].map((t, i) => (
                <div
                  className="col-sm-6 col-xl-4"
                  key={t.title}
                  data-aos="fade-up"
                  data-aos-delay={i * 60}>
                  <div className="nb3-bg cus-rounded-1 p-5 h-100">
                    <i className={`${t.icon} fs-three p1-color`} />
                    <h5 className="mt-4">{t.title}</h5>
                    <p className="mt-2">{t.text}</p>
                    <a
                      href="/education"
                      className="link fs-six-up d-inline-flex align-items-center gap-2 mt-3">
                      Read lesson <i className="ti ti-arrow-right" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Study Resources */}
        <section className="provide-world pt-120 pb-120 position-relative z-0">
          <div className="container">
            <div className="row justify-content-center mb-10">
              <div className="col-lg-8 text-center" data-aos="fade-up">
                <span className="heading s1-color fs-five mb-5">
                  Study Resources
                </span>
                <h3>Practice materials & quick wins</h3>
              </div>
            </div>
            <div className="row g-6">
              {[
                {
                  icon: "ti ti-file-text",
                  title: "Worksheets & Checklists",
                  text: "Position sizing, trade journal, and risk checklist templates.",
                },
                {
                  icon: "ti ti-bell",
                  title: "Price Alerts Guide",
                  text: "Learn to set meaningful alerts and avoid noise.",
                },
                {
                  icon: "ti ti-zoom-question",
                  title: "Glossary",
                  text: "Plain-English definitions of common crypto terms.",
                },
                {
                  icon: "ti ti-school",
                  title: "Weekly Class",
                  text: "Join live sessions with Q&A and chart reviews.",
                },
              ].map((r, i) => (
                <div
                  className="col-sm-6 col-xl-3"
                  key={r.title}
                  data-aos="zoom-in"
                  data-aos-delay={i * 80}>
                  <div className="nb3-bg cus-rounded-1 p-5 h-100 d-flex flex-column">
                    <i className={`${r.icon} fs-three p1-color`} />
                    <h5 className="mt-4">{r.title}</h5>
                    <p className="mt-2 flex-grow">{r.text}</p>
                    <a
                      href="/education"
                      className="link fs-six-up d-inline-flex align-items-center gap-2 mt-2">
                      Open <i className="ti ti-arrow-right" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="provide-world bg nb4-bg pt-120 pb-120 position-relative z-0">
          <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1 d-none d-md-flex">
            <img
              src="/new-assets/images/button.png"
              alt="vector"
              className="position-absolute pt-6 pt-xl-15 previewShapeRevX"
            />
          </div>
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xxl-7 text-center">
                <span className="heading p1-color fs-five mb-5">
                  Stay sharp
                </span>
                <h3 className="mb-5 mb-lg-6">
                  Get weekly lessons & market tips
                </h3>
                <p className="fs-six-up mx-ch mx-auto">
                  One concise email. No hype—just techniques you can actually
                  use.
                </p>
                <div className="d-inline-flex gap-3 mt-6 flex-wrap justify-center">
                  <a href="/sign-up" className="cmn-btn py-2 px-5">
                    Create account
                  </a>
                  <a
                    href="/market-data"
                    className="cmn-btn outline_btn py-2 px-5">
                    Explore markets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EducationPageContents;
