import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function StartInvestment() {
  return (
    <>
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
            <div className="col-xl-8 col-xxl-7">
              <div className="heading__content mb-8 mb-lg-10 text-center">
                <h3 className="mb-4 mb-lg-6" data-aos="zoom-in">
                  Ready to start your{" "}
                  <span className=" p1-color ">investment journey?</span>
                </h3>
                <p className="fs-six-up mx-ch mx-auto" data-aos="zoom-in-up">
                  Join millions of smart investors who have already discovered
                  the power of our AI-driven platform and are building wealth
                  with confidence.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="singletab">
                <ul className="tablinks d-center flex-wrap gap-3 gap-lg-4 mb-10 mb-xxl-15">
                  <li className="nav-links activ" data-aos="zoom-in-right">
                    <a
                      href="/sign-up"
                      className="tablin cmn-btn  align-items-center fs-six-up py-2 py-lg-3 px-6 px-md-3 px-xxl-10 d-flex gap-3 align-items-center">
                      Open Investment Account
                    </a>
                  </li>
                  <li className="nav-links" data-aos="zoom-in-left">
                    <a
                      href="/sign-in"
                      className="tablink cmn-btn outline_btn align-items-center fs-six-up py-2 py-lg-3 px-6 px-md-3 px-xxl-10 d-flex gap-3 align-items-center">
                      Learn More →
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center flex-wrap gap-4 mt-3">
            <div
              className="d-flex align-items-center gap-2"
              data-aos="fade-right"
              data-aos-easing="linear">
              <i className="bi bi-shield-check text-success"></i> SEC Regulated
            </div>
            <div
              className="d-flex align-items-center gap-2"
              data-aos="fade-down"
              data-aos-easing="linear">
              <i className="bi bi-bank text-success"></i> FDIC Insured
            </div>
            <div
              className="d-flex align-items-center gap-2"
              data-aos="fade-up"
              data-aos-easing="linear">
              <i className="bi bi-lock text-success"></i> Bank-Level Security
            </div>
            <div
              className="d-flex align-items-center gap-2"
              data-aos="fade-left"
              data-aos-easing="linear">
              <i className="bi bi-lightning-charge text-success"></i> Instant
              Execution
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
