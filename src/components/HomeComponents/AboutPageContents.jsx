"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import CryptoComparisonChart from "../Widgets/CryptoComparisonChart";

const AboutPageContents = () => {
  // Init AOS once
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
          <div className="container mt-lg-0 pt-18 pt-xl-20">
            <div className="row">
              <div className="col-12 breadcrumb-area ">
                <h2 className="mb-4" data-aos="fade-up">
                  About Us
                </h2>
                <nav
                  aria-label="breadcrumb"
                  data-aos="fade-up"
                  data-aos-delay="100">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li
                      className="breadcrumb-item ms-2 ps-7 active"
                      aria-current="page">
                      <span>About Us</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* banner section end */}

        {/* Company Story */}
        <section className="company-story position-relative z-0 pt-120 pb-120">
          <div className="animation position-absolute w-100 h-100 z-n1">
            <img
              src="/new-assets/images/star3.png"
              alt="vector"
              className="position-absolute top-0 end-0 pt-10 pe-20 me-20 d-none d-xxl-flex previewSkew"
            />
          </div>
          <div className="container">
            <div className="row gy-15 gy-lg-0 justify-content-center align-items-center">
              <div className="col-sm-10 col-lg-6 col-xxl-5 order-2 order-lg-0">
                <div
                  className="company-story__thumbs d-center"
                  data-aos="zoom-in">
                  <img
                    src="/new-assets/images/company_story.png"
                    className="cus-rounded-1 w-100"
                    alt="Imgae"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=BHACKCNDMW8"
                    className="popup-video btn-popup-animation position-absolute d-center rounded-circle"
                    aria-label="Play video">
                    <i className="fa-solid fa-play fs-four" />
                  </a>
                </div>
              </div>

              <div className="col-lg-6 col-xxl-7">
                <div className="row ms-xl-3 ms-xxl-10">
                  <div className="col-xxl-6" data-aos="fade-up">
                    <div className="company-story__part">
                      <span className="heading p1-color fs-five">
                        Our Company Story
                      </span>
                      <h3 className="mb-3 mt-5">Built for Crypto Investors</h3>
                      <p>
                        We help people grow wealth in digital assets with simple
                        plans, transparent fees, and pro-grade tools. From
                        auto-investing to real-time analytics, our platform
                        gives you the confidence to invest in crypto the right
                        way.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-xxl-12 mt-8 mt-md-10 mt-xxl-13"
                    data-aos="fade-up"
                    data-aos-delay="120">
                    <div className="company-story__part d-flex align-items-sm-center flex-column flex-sm-row">
                      <div className="btn-area mt-8 mt-sm-0 me-2 me-sm-6 me-xxl-10 order-2 order-sm-0">
                        <a
                          href="/sign-up"
                          className="cmn-btn cmn-btn-circle d-center flex-column fw_500">
                          <i className="ti ti-arrow-up-right fs-three" />
                          Start Now
                        </a>
                      </div>
                      <div className="content">
                        <h3 className="mb-3">Who We Are</h3>
                        <p>
                          We’re a team of market analysts, engineers, and risk
                          specialists. We combine automation with human
                          oversight, so you get strategies that are data-driven
                          and battle-tested.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Metrics */}
                  <div
                    className="col-12 mt-8"
                    data-aos="fade-up"
                    data-aos-delay="200">
                    <div className="row g-4">
                      {[
                        {
                          icon: "ti ti-users",
                          label: "Investors",
                          value: "480k+",
                        },
                        {
                          icon: "ti ti-shield-check-filled",
                          label: "Platform Uptime",
                          value: "99.95%",
                        },
                        {
                          icon: "ti ti-world",
                          label: "Countries",
                          value: "120+",
                        },
                        {
                          icon: "ti ti-trending-up",
                          label: "Avg. Execution",
                          value: "< 50ms",
                        },
                      ].map((m) => (
                        <div className="col-6 col-md-3" key={m.label}>
                          <div className="nb3-bg cus-rounded-1 text-center py-5">
                            <i className={`${m.icon} fs-three p1-color`} />
                            <h4 className="mt-3">{m.value}</h4>
                            <p className="fs-seven mt-2">{m.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client / Trust bar */}
        <div
          className="client_company_section py-15 p1-bg align-items-center justify-content-center"
          data-aos="fade-up">
          <div className="swiper client_company">
            <div className="swiper-wrapper align-items-center">
              {Array.from({ length: 7 }).map((_, i) => (
                <div className="swiper-slide text-center" key={i}>
                  <img
                    src={`/new-assets/images/company_logo${i ? i : ""}.png`}
                    alt="Client Logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How it works */}
        <section className="trade_on a2-bg pt-120 pb-120 position-relative z-0">
          <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
            <img
              src="/new-assets/images/coin.png"
              alt="vector"
              className="position-absolute d-none d-md-flex previewShapeRevX"
            />
          </div>
          <div className="container">
            <div className="row gy-10 gy-xxl-0 justify-content-between align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <span className="heading s1-color fs-five mb-5">
                  How It Works
                </span>
                <h3 className="mb-4 mb-lg-5">
                  Invest in Crypto with Confidence
                </h3>
                <p className="fs-six mx-ch">
                  Pick a plan, set your risk, and let our engine handle the
                  heavy lifting. You can pause, withdraw, or switch strategies
                  anytime.
                </p>
                <ul className="d-flex gap-4 flex-column mt-6">
                  <li className="d-flex align-items-center gap-3 fs-six-up">
                    <i className="ti ti-check s1-color fs-four" /> KYC-ready
                    onboarding in minutes
                  </li>
                  <li className="d-flex align-items-center gap-3 fs-six-up">
                    <i className="ti ti-check s1-color fs-four" /> Auto-invest
                    schedules and alerts
                  </li>
                  <li className="d-flex align-items-center gap-3 fs-six-up">
                    <i className="ti ti-check s1-color fs-four" /> Real-time P&L
                    and risk controls
                  </li>
                </ul>
                <a
                  href="/sign-up"
                  className="cmn-btn secondary-alt fs-six-up nb4-xxl-bg gap-2 align-items-center py-2 px-5 mt-7">
                  Get Started <i className="ti ti-arrow-right fs-four" />
                </a>
              </div>
              <div className="col-lg-7" data-aos="fade-left">
                <div className="row g-4">
                  {[
                    {
                      title: "Choose a Plan",
                      text: "Fixed yield, smart index, or momentum strategies tailored to your risk.",
                      icon: "ti ti-playlist-check",
                    },
                    {
                      title: "Fund Your Account",
                      text: "Deposit crypto or stablecoins and allocate across portfolios.",
                      icon: "ti ti-wallet",
                    },
                    {
                      title: "Track & Rebalance",
                      text: "We monitor markets and adjust positions automatically.",
                      icon: "ti ti-arrows-shuffle",
                    },
                  ].map((s, i) => (
                    <div className="col-sm-6 col-xl-4" key={s.title}>
                      <div className="nb3-bg cus-rounded-1 p-5 h-100">
                        <i className={`${s.icon} fs-three p1-color`} />
                        <h5 className="mt-4">{s.title}</h5>
                        <p className="mt-2">{s.text}</p>
                        <span className="fs-seven opacity-75">
                          Step {i + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="provide-world our_mission pt-120 pb-120 position-relative z-0">
          <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
            <img
              src="/new-assets/images/vector7.png"
              alt="vector"
              className="position-absolute bottom-0 pt-6 pt-xl-15 d-none d-lg-flex push_animat"
            />
          </div>
          <div className="container">
            <div className="row justify-content-between align-items-center mb-10 mb-lg-15">
              <div className="col-xl-6" data-aos="fade-up">
                <span className="heading s1-color fs-five mb-5">
                  Security & Compliance
                </span>
                <h3>Protecting Your Capital</h3>
                <p className="fs-six-up mt-3">
                  We combine bank-grade security with crypto-native best
                  practices to help keep your assets safe.
                </p>
              </div>
              <div className="col-xl-5" data-aos="fade-up" data-aos-delay="100">
                <ul className="d-flex flex-column gap-3 mt-4">
                  <li className="d-flex align-items-center gap-3">
                    <i className="ti ti-shield-lock s1-color fs-four" /> 2FA,
                    device checks, and session controls
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <i className="ti ti-lock-check s1-color fs-four" />{" "}
                    Cold-storage custody for long-term holdings
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <i className="ti ti-file-certificate s1-color fs-four" />{" "}
                    Transparent fees and real-time statements
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <i className="ti ti-bug-off s1-color fs-four" /> Continuous
                    monitoring and anomaly detection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy comparison chart */}
        <section className="pt-0">
          <div className="container" data-aos="fade-up">
            <CryptoComparisonChart />
          </div>
        </section>

        {/* Leadership */}
        <section className="team pt-120 pb-120 position-relative z-0">
          <div className="container">
            <div className="row justify-content-between align-items-center mb-10">
              <div className="col-xl-6" data-aos="fade-up">
                <span className="heading p1-color fs-five">Leadership</span>
                <h3 className="mt-4">Meet the Team</h3>
              </div>
              <div className="col-xl-5" data-aos="fade-up" data-aos-delay="100">
                <p className="fs-six-up">
                  Experienced operators from fintech, exchanges, and
                  cybersecurity.
                </p>
              </div>
            </div>

            <div className="row g-6">
              {[
                { img: "author10.png", name: "Brooklyn Simmons", role: "CEO" },
                { img: "author11.png", name: "Cody Fisher", role: "CTO" },
                {
                  img: "author12.png",
                  name: "Wade Warren",
                  role: "Head of Risk",
                },
                {
                  img: "author13.png",
                  name: "Esther Howard",
                  role: "Product Lead",
                },
              ].map((m, i) => (
                <div
                  className="col-sm-6 col-xl-3"
                  key={m.name}
                  data-aos="zoom-in"
                  data-aos-delay={i * 80}>
                  <div className="team__card nb3-bg cus-rounded-1 overflow-hidden">
                    <img
                      src={`/new-assets/images/${m.img}`}
                      alt={m.name}
                      className="w-100"
                      style={{ aspectRatio: "1/1", objectFit: "cover" }}
                    />
                    <div className="team__content p-4">
                      <h5 className="team__title">{m.name}</h5>
                      <p className="mt-1">{m.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="roadmap pt-120 pb-120 position-relative z-0">
          <div className="container">
            <div className="row justify-content-center mb-10">
              <div className="col-lg-8 text-center" data-aos="fade-up">
                <span className="heading s1-color fs-five mb-5">Roadmap</span>
                <h3>What’s Coming Next</h3>
                <p className="fs-six-up mt-3">
                  We’re shipping improvements weekly to make your investing
                  smoother and safer.
                </p>
              </div>
            </div>
            <div
              className="roadmap__content"
              data-aos="fade-up"
              data-aos-delay="120">
              <div className="roadmap__line" />
              {[
                {
                  q: "Q1",
                  title: "Auto-Rebalancing",
                  text: "Periodic portfolio rebalancing with tax-aware logic.",
                },
                {
                  q: "Q2",
                  title: "DeFi Yield",
                  text: "Curated pools with real-time risk scoring.",
                },
                {
                  q: "Q3",
                  title: "Copy Strategies",
                  text: "Follow expert portfolios with custom limits.",
                },
                {
                  q: "Q4",
                  title: "Mobile App",
                  text: "iOS/Android with biometrics and push alerts.",
                },
              ].map((r, i) => (
                <div className="roadmap__part d-flex" key={r.title}>
                  <div className="event nb3-bg cus-rounded-1 p-5">
                    <span className="fs-seven opacity-75">{r.q} • 2025</span>
                    <h5 className="mt-2">{r.title}</h5>
                    <p className="mt-2">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials (kept) */}
        <section className="testimonial-secondary te pt-120 pb-120 position-relative z-0">
          <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
            <img
              src="/new-assets/images/icon/quote_bg.png"
              alt="vector"
              className="position-absolute push_animat d-none d-md-flex"
            />
            <img
              src="/new-assets/images/icon/quote_bg.png"
              alt="vector"
              className="position-absolute push_animat d-none d-md-flex"
            />
          </div>
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xxl-7">
                <div className="heading__content mb-10 mb-lg-15 text-center">
                  <span className="heading fs-five s1-color mb-5">
                    Testimonial
                  </span>
                  <h3>What people say</h3>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-12">
                <div className="swiper testimonial_swiper">
                  <div className="swiper-wrapper">
                    {[
                      {
                        img: "author10.png",
                        name: "Brooklyn Simmons",
                        role: "Marketing Director",
                      },
                      {
                        img: "author11.png",
                        name: "Cody Fisher",
                        role: "Account Executive",
                      },
                      {
                        img: "author12.png",
                        name: "Wade Warren",
                        role: "Medical Assistant",
                      },
                      {
                        img: "author13.png",
                        name: "Esther Howard",
                        role: "Marketing Director",
                      },
                    ].map((t) => (
                      <div
                        className="swiper-slide d-flex justify-content-center"
                        key={t.name}>
                        <div className="col-lg-10 col-xl-8 col-xxl-6">
                          <div className="testimonial__par text-center">
                            <div className="author_thumbs">
                              <img
                                src={`/new-assets/images/${t.img}`}
                                alt={t.name}
                                className="rounded-circle"
                              />
                            </div>
                            <div className="author_content">
                              <p className="fs-six-up mt-5 mt-xxl-6">
                                “Clear fees, fast execution, and simple plans.
                                This is how crypto investing should feel.”
                              </p>
                              <h5 className="heading p1-color mt-5">
                                {t.name}
                              </h5>
                              <span className="fs-eight fw_500 mt-2">
                                {t.role}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="swiper-pagination mt-8 mt-md-10 mt-lg-15" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="provide-world bg nb4-bg pt-120 pb-120 position-relative z-0">
          <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1 d-none d-md-flex">
            <img
              src="/new-assets/images/button.png"
              alt="vector"
              className="position-absolute pt-6 pt-xl-15 previewShapeRevX"
            />
          </div>
          <div className="container" data-aos="zoom-in">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xxl-7 text-center">
                <span className="heading p1-color fs-five mb-5">
                  Ready to begin?
                </span>
                <h3 className="mb-5 mb-lg-6">Start investing in minutes</h3>
                <p className="fs-six-up mx-ch mx-auto">
                  Create an account, choose a plan, and put your crypto to work.
                </p>
                <div className="d-inline-flex gap-3 mt-6">
                  <a href="/sign-up" className="cmn-btn py-2 px-5">
                    Create account
                  </a>
                  <a href="/about-us" className="cmn-btn outline_btn py-2 px-5">
                    Learn more
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

export default AboutPageContents;
