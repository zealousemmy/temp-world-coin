import React from "react";

const ContactPageContents = () => {
  return (
    <>
      <div>
        {/* banner section start*/}
        <section className="banner-section  pt-120 pb-120">
          <div className="container mt-10 mt-lg-0 pt-15 pt-lg-20 pb-5 pb-lg-0">
            <div className="row">
              <div className="col-12 breadcrumb-area ">
                <h2 className="mb-4">Contact</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li
                      className="breadcrumb-item ms-2 ps-7 active"
                      aria-current="page">
                      <span>Contact</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* banner section end */}
        {/* Contact start */}
        <section className="contact nb4-bg pt-120 pb-120">
          <div className="container ">
            <div className="row gy-18 justify-content-between">
              <div className="col-12 col-lg-5 col-xl-5">
                <div className="submissions-area d-flex flex-column gap-8 gap-lg-10">
                  <div className="submissions">
                    <h3>Business submissions</h3>
                    <p className="fs-six-up mt-4">
                      For business plan submissions. Please submit using this
                    </p>
                  </div>
                  <div className="contact__mail d-flex flex-column gap-5 gap-lg-6 pb-8 pb-lg-10 border-bottom border-color four">
                    <div className="d-flex align-items-center gap-3">
                      <span className="box_12 p1-bg rounded-circle d-center">
                        <i className="ti ti-message-2 fs-four-up nb4-color" />
                      </span>
                      <span className="fs-six-up">
                        <a
                          href="https://pixner.net/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="afcbcacec1c1ce81ccdadddbc6dcefcad7cec2dfc3ca81ccc0c2">
                          [email&nbsp;protected]
                        </a>
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <span className="box_12 p1-bg rounded-circle d-center">
                        <i className="ti ti-phone fs-four-up nb4-color" />
                      </span>
                      <span className="fs-six-up">(555) 555-555</span>
                    </div>
                  </div>
                  <div className="submissions">
                    <h3>Our socials media</h3>
                    <ul className="social-area d-center justify-content-start gap-2 gap-md-3 mt-7 mt-lg-8">
                      <li>
                        <a className="d-center cus-rounded-1 fs-four" href="#">
                          <i className="ti ti-brand-facebook" />
                        </a>
                      </li>
                      <li>
                        <a className="d-center cus-rounded-1 fs-four" href="#">
                          <i className="ti ti-brand-twitch" />
                        </a>
                      </li>
                      <li>
                        <a className="d-center cus-rounded-1 fs-four" href="#">
                          <i className="ti ti-brand-instagram" />
                        </a>
                      </li>
                      <li>
                        <a className="d-center cus-rounded-1 fs-four" href="#">
                          <i className="ti ti-brand-discord-filled" />
                        </a>
                      </li>
                      <li>
                        <a className="d-center cus-rounded-1 fs-four" href="#">
                          <i className="ti ti-brand-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7 col-xl-6">
                <form
                  method="POST"
                  autoComplete="off"
                  id="frmContactus"
                  className="contact__form alt_form px-4 px-lg-8">
                  <h3 className="contact__title mb-7 mb-md-10 mb-lg-15">
                    Enquiry Form
                  </h3>
                  <div className="d-flex gap-3 gap-sm-5 gap-lg-8 flex-column">
                    <div className="row gap-3 gap-sm-0">
                      <div className="col-sm-6">
                        <div className="single-input">
                          <input
                            type="text"
                            className="fs-six-up"
                            name="fname"
                            placeholder="Fast Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="single-input">
                          <input
                            type="text"
                            className="fs-six-up"
                            name="lname"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row gap-3 gap-sm-0 ">
                      <div className="col-sm-6">
                        <div className="single-input">
                          <input
                            type="email"
                            className="fs-six-up"
                            name="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="single-input">
                          <input
                            type="text"
                            className="fs-six-up"
                            name="Phone"
                            placeholder="Phone"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-single">
                      <textarea
                        className="fs-six-up"
                        name="message"
                        rows={4}
                        placeholder="Message"
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <span id="msg" />
                  <button
                    type="submit"
                    className="cmn-btn py-3 px-5 px-lg-6 mt-8 mt-lg-10 d-flex ms-auto"
                    name="submit"
                    id="submit">
                    Send Message
                    <i className="bi bi-arrow-up-right" />
                    <span />
                  </button>
                </form>
              </div>
              <div className="col-12">
                <iframe
                  className="cus-rounded-1 cus_map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5156.793422135061!2d-105.02171047857397!3d39.77899593135569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1699354709950!5m2!1sen!2sbd"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Contact end */}
      </div>
    </>
  );
};

export default ContactPageContents;
