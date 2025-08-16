/* ===== FAQ Section (drop-in replacement) ===== */
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";

const FAQSection = () => {
  // AOS init (safe if you already init AOS elsewhere—this will just refresh)
  useEffect(() => {
    let AOSlib;
    const boot = async () => {
      const AOS = (await import("aos")).default;
      AOSlib = AOS;
      AOS.init({
        duration: 700,
        offset: 80,
        easing: "ease-out-cubic",
        once: false,
      });
      setTimeout(() => AOS.refreshHard(), 200);
    };
    boot();
    return () => AOSlib?.refreshHard();
  }, []);

  // Manual accordion state (multiple items can be open)
  const [openSet, setOpenSet] = useState(new Set());

  const toggle = (idx) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  // If you want only one open at a time, use this instead:
  // const toggle = (idx) => setOpenSet((prev) => (prev.has(idx) ? new Set() : new Set([idx])))

  const faqs = [
    {
      q: "What is crypto trading?",
      a: "Buying and selling digital assets (like BTC/ETH) to capture price changes or build long-term positions.",
    },
    {
      q: "How do I get started?",
      a: "Create an account, complete KYC, fund with crypto/stablecoins, and start small while you learn.",
    },
    {
      q: "How do I stay updated on markets?",
      a: "Use our Market page widgets, set price alerts, and read weekly insights. Avoid reacting to noise.",
    },
    {
      q: "What are common strategies?",
      a: "Dollar-cost averaging, momentum/trend following, mean reversion, and event-driven—always define risk first.",
    },
    {
      q: "Is trading suitable for everyone?",
      a: "No. Crypto is volatile. Only invest what you can afford to risk; consider longer horizons if volatility is stressful.",
    },
    {
      q: "What is fundamental analysis?",
      a: "Look at network usage, tokenomics, team, roadmap, and community—beyond just price action.",
    },
    {
      q: "What are the key risks?",
      a: "Market volatility, smart-contract exploits, custody risk, and behavioral errors (FOMO/over-leverage).",
    },
  ];

  return (
    <section className="faq a2-bg pb-120 pt-120 position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="/new-assets/images/button.png"
          alt="vector"
          className="position-absolute pt-6 pt-xl-15 previewShapeRevX d-none d-xl-flex"
        />
        <img
          src="/new-assets/images/star2.png"
          alt="vector"
          className="position-absolute push_animat end-0 top-0 mt-20 pt-5 me-xl-20 pe-10 d-none d-lg-flex"
        />
        <img
          src="/new-assets/images/vector20.png"
          alt="vector"
          className="position-absolute bottom-0 start-0 pb-11 ps-7 d-none d-xxxl-flex"
        />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div
              className="heading__content mb-10 mb-lg-15 text-center"
              data-aos="fade-up">
              <span className="heading fs-five p1-color mb-5">Faq’s</span>
              <h3>Frequently Asked Questions</h3>
            </div>
          </div>
        </div>

        <div className="row gy-10 justify-content-center align-items-center">
          <div className="col-md-12 col-lg-7 col-xxl-6" data-aos="fade-right">
            <div className="faq__part">
              <div className="accordion-section d-grid gap-6">
                {faqs.map((item, idx) => {
                  const isOpen = openSet.has(idx);
                  return (
                    <div
                      key={item.q}
                      className={
                        `accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5 ` +
                        (isOpen ? "accordion_bg active" : "")
                      }>
                      <h5 className="header-area">
                        <button
                          className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                          type="button"
                          aria-expanded={isOpen ? "true" : "false"}
                          aria-controls={`faq-panel-${idx}`}
                          id={`faq-header-${idx}`}
                          onClick={() => toggle(idx)}>
                          {item.q}
                        </button>
                      </h5>

                      <div
                        id={`faq-panel-${idx}`}
                        className="content-area"
                        role="region"
                        aria-labelledby={`faq-header-${idx}`}
                        style={{ display: isOpen ? "block" : "none" }} // override CSS "display: none"
                      >
                        <div className="content-body pt-5">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className="col-9 col-sm-8 col-lg-5 col-xxl-6"
            data-aos="fade-left">
            <div className="faq_thumbs d-flex justify-content-center justify-content-xl-end">
              <img src="/new-assets/images/faq.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
