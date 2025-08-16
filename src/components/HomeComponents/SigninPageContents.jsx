"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "@/redux/features/auth/auth_services_syn";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const SigninPageContents = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loader } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch(LoginUser(formData));
  };

  return (
    <section className="sign nb4-bg h-100 d-flex align-items-center position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="/new-assets/images/star.png"
          alt="vector"
          className="position-absolute push_animat"
        />
      </div>
      <div className="container ">
        <div className="row align-items-center justify-content-center justify-content-xl-start">
          <div className="col-12 col-sm-10 col-md-6">
            <div className="welcome alt-color text-center text-md-start pt-120 pb-120 position-relative z-0">
              <h1 className="display-one">Welcome Back!</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 col-xxl-5 offset-xxl-1 text-center ms-xl-auto mx-auto">
            <div className="sign__content ms-md-5 ms-xxl-0 pt-120 pb-120">
              <div className="head_part">
                <a href="/">
                  <img src="/w-c-removebg-preview.png" alt="Logo" />
                </a>
                <h5 className="mt-5 mt-lg-6">Login to Your Account</h5>
              </div>

              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="contact__form mt-8 mt-lg-10 text-start">
                <div className="d-flex flex-column gap-5 gap-lg-6">
                  <div className="single-input">
                    <label className="mb-2 nw1-color">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="fs-six-up bg_transparent"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <small className="text-danger">{errors.email}</small>
                    )}
                  </div>

                  <div className="single-input">
                    <label className="mb-2 nw1-color">Password</label>
                    <div className="input-pass position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="fs-six-up bg_transparent pe-13"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <span
                        className="position-absolute"
                        style={{
                          right: 10,
                          top: 10,
                          cursor: "pointer",
                        }}
                        onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                      </span>
                    </div>
                    {errors.password && (
                      <small className="text-danger d-block mt-1">
                        {errors.password}
                      </small>
                    )}
                  </div>
                </div>

                <div className="mt-3 d-flex align-items-center justify-content-between gap-10 flex-wrap">
                  <label className="checkbox-single d-flex align-items-center nw1-color">
                    <span className="checkbox-area d-center">
                      <input type="checkbox" />
                      <span className="checkmark d-center" />
                    </span>
                    Remember me
                  </label>
                  <a href="#" className="nw1-color">
                    Forgot Password?
                  </a>
                </div>

                <div className="mt-7 mt-lg-8">
                  <button
                    type="submit"
                    className="cmn-btn py-3 px-5 px-lg-6 mt-7 mt-lg-8 w-100 d-center"
                    disabled={loader}>
                    {loader ? "Signing in..." : "Sign In"}
                  </button>
                </div>
              </form>

              <div className="mt-8 mt-lg-10">
                <p>
                  Don’t have an account? <a href="/sign-up">Register Here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninPageContents;
