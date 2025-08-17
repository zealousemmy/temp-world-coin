import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function ReferralBonusSection() {
  return (
    <>
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
            <div className="col-lg-8 col-xxl-7">
              <div className="heading__content mb-10 mb-lg-15 text-center">
                <div className="mb-2">
                  <i className="bi bi-gift fs-1 text-warning"></i>
                </div>
                <h3 className="mb-5 mb-lg-6">
                  Earn <span className="s1-color">10% Bonus</span> for Every
                  Referral
                </h3>
                <p className="fs-six-up mx-ch mx-auto">
                  Share World Coin and earn 10% of their first deposit as a
                  bonus. It’s our way of saying thank you for growing our
                  community.
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-6 gy-xxl-0">
            <div className="col-md-6 col-xxl-4">
              <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
                <span className="provide-card__icon d-center col-2 nb4-bg p-4 rounded-circle mx-auto">
                  <i className="bi bi-person-circle fs-2 text-primary"></i>
                </span>
                <h4 className="mt-5 mb-5">Share Your Code</h4>
                <p>Get your unique referral code when you sign up</p>
              </div>
            </div>
            <div className="col-md-6 col-xxl-4">
              <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
                <span className="provide-card__icon d-center col-2 nb4-bg p-4 rounded-circle mx-auto">
                  <i className="bi bi-cash-stack fs-2 text-success "></i>
                </span>
                <h4 className="mt-5 mb-5">Someone Invests</h4>
                <p>
                  When someone signs up and makes their first deposit using your
                  code
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xxl-4">
              <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
                <span className="provide-card__icon col-2 d-center nb4-bg p-4 rounded-circle mx-auto">
                  <i className="bi bi-star fs-2 text-warning"></i>
                </span>
                <h4 className="mt-5 mb-5">Earn 10% Bonus</h4>
                <p>Receive 10% of their deposit amount instantly</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10  d-center flex-wrap">
          <a
            href="/sign-up"
            className="btn btn-warning cmn-btn px-4 py-2 fw-semibold">
            <i className="bi bi-link-45deg me-2"></i> Get Your Referral Code
          </a>
        </div>
      </section>
    </>
  );
}
