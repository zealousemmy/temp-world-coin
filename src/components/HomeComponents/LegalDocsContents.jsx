import React from "react";

const LegalDocsContents = () => {
  return (
    <>
      <div>
        {/* banner section start*/}
        <section className="banner-section  pt-120 pb-120">
          <div className="container mt-10 mt-lg-0 pt-15 pt-lg-20 pb-5 pb-lg-0">
            <div className="row">
              <div className="col-12 breadcrumb-area ">
                <h2 className="mb-4">Legal docs</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li
                      className="breadcrumb-item ms-2 ps-7 active"
                      aria-current="page">
                      <span>Legal docs</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* banner section end */}
        {/*provide-world start*/}
        <section className="provide-world pt-120 position-relative z-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-xxl-6">
                <div className="heading__content mb-10 mb-lg-15 text-center">
                  <h3 className="mb-5 mb-lg-6">Company legal docs</h3>
                  <p className="fs-six-up mx-ch mx-auto">
                    We're constantly improving our trading platform, trying to
                    make it the best on the market.
                  </p>
                </div>
              </div>
            </div>
            <div className="row gy-6 gy-xxl-0">
              <div className="col-md-6 col-xxl-4">
                <div className="provide-world__card secondary nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
                  <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                    <i className="ti ti-file fs-three p1-color" />
                  </span>
                  <h4 className="mt-5 mb-5">Terms of Service</h4>
                  <p>
                    Trading is not without its challenges, as markets can be
                    highly volatile and unpredictable. It requires discipline
                  </p>
                  <a
                    href="terms-conditions.html"
                    className="cmn-btn link third-link fs-five  gap-2 gap-lg-3 align-items-center mt-5">
                    Learn More
                    <i className="ti ti-arrow-narrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-xxl-4">
                <div className="provide-world__card secondary nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
                  <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                    <i className="ti ti-world fs-three p1-color" />
                  </span>
                  <h4 className="mt-5 mb-5">Policies</h4>
                  <p>
                    Trading is not without its challenges, as markets can be
                    highly volatile and unpredictable. It requires discipline
                  </p>
                  <a
                    href="privacy-policy.html"
                    className="cmn-btn link third-link fs-five  gap-2 gap-lg-3 align-items-center mt-5">
                    Learn More
                    <i className="ti ti-arrow-narrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-xxl-4">
                <div className="provide-world__card secondary nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
                  <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                    <i className="ti ti-shield-lock-filled fs-three p1-color" />
                  </span>
                  <h4 className="mt-5 mb-5">Security</h4>
                  <p>
                    Trading is not without its challenges, as markets can be
                    highly volatile and unpredictable. It requires discipline
                  </p>
                  <a
                    href="terms-conditions.html"
                    className="cmn-btn link third-link fs-five  gap-2 gap-lg-3 align-items-center mt-5">
                    Learn More
                    <i className="ti ti-arrow-narrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* provide-world end */}
        {/* FAQ Section Starts */}
        <section className="faq pb-120 pt-120 position-relative z-0">
          <div className="animation vector position-absolute top-0 left-0 w-100 h-100 z-n1">
            <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
              <img
                src="assets/images/plus.png"
                alt="vector"
                className="position-absolute  top-0 start-0 ps-20 ms-10 pt-120 previewShapeRevX d-none d-xl-flex"
              />
              <img
                src="assets/images/star30.png"
                alt="vector"
                className="position-absolute push_animat end-0 top-0  pt-20 me-xl-20 pe-20 d-none d-lg-flex"
              />
              <img
                src="assets/images/vector21.png"
                alt="vector"
                className="position-absolute bottom-0 start-0 pb-11 ps-20 ms-10 d-none d-xxxl-flex "
              />
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xxl-7">
                <div className="heading__content mb-10 mb-lg-15 text-center">
                  <span className="heading fs-five p1-color mb-5">
                    Frequent question
                  </span>
                  <h3>Do you have any question</h3>
                </div>
              </div>
            </div>
            <div className="row gy-6 justify-content-center align-items-center">
              <div className="col-xl-6">
                <div className="faq__part">
                  <div className="accordion-section d-grid gap-6">
                    <div className="accordion-single  cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                          type="button">
                          {" "}
                          What is trading?
                        </button>
                      </h5>
                      <div className="content-area">
                        <div className="content-body pt-5">
                          <p>
                            Trading involves buying and selling financial
                            instruments like stocks advantage of price
                            fluctuations in these assets.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                          type="button">
                          How can I get started with trading?
                        </button>
                      </h5>
                      <div className="content-area">
                        <div className="content-body pt-5">
                          <p>
                            Trading involves buying and selling financial
                            instruments like stocks advantage of price
                            fluctuations in these assets.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                          type="button">
                          How can I stay updated on market news and trends?
                        </button>
                      </h5>
                      <div className="content-area">
                        <div className="content-body pt-5">
                          <p>
                            Trading involves buying and selling financial
                            instruments like stocks advantage of price
                            fluctuations in these assets.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                          type="button">
                          What are the different types of trading?
                        </button>
                      </h5>
                      <div className="content-area">
                        <div className="content-body pt-5">
                          <p>
                            Trading involves buying and selling financial
                            instruments like stocks advantage of price
                            fluctuations in these assets.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="faq__part">
                  <div className="accordion-section d-grid gap-6">
                    <div className="accordion-single  cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                          type="button">
                          {" "}
                          How can I get started in Forex trading?
                        </button>
                      </h5>
                      <div className="content-area">
                        <div className="content-body pt-5">
                          <p>
                            Trading involves buying and selling financial
                            instruments like stocks advantage of price
                            fluctuations in these assets.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                          type="button">
                          What is fundamental analysis in Forex trading?
                        </button>
                      </h5>
                      <div className="content-area">
                        <div className="content-body pt-5">
                          <p>
                            Trading involves buying and selling financial
                            instruments like stocks advantage of price
                            fluctuations in these assets.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                          type="button">
                          What are the risks involved in Forex trading?
                        </button>
                      </h5>
                      <div className="content-area">
                        <div className="content-body pt-5">
                          <p>
                            Trading involves buying and selling financial
                            instruments like stocks advantage of price
                            fluctuations in these assets.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                          type="button">
                          How can I learn more about Forex trading?
                        </button>
                      </h5>
                      <div className="content-area">
                        <div className="content-body pt-5">
                          <p>
                            Trading involves buying and selling financial
                            instruments like stocks advantage of price
                            fluctuations in these assets.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section Ends */}
      </div>
    </>
  );
};

export default LegalDocsContents;
