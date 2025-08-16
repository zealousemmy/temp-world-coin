"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "@/redux/features/auth/auth_services_syn";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import CustomCountrySelect from "../Widgets/CustomCountrySelect";

const SignupPageContents = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");

  const { loader } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [countries, setCountries] = useState([]);
  const [referralCode, setReferralCode] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    country: "",
  });

  useEffect(() => {
    if (ref) {
      setReferralCode(ref);
    }
    getCountries();
  }, [ref]);

  const getCountries = async () => {
    const res = await axios.get(
      "https://countriesnow.space/api/v0.1/countries/flag/images"
    );
    setCountries(res.data.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.country) newErrors.country = "Country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch(RegisterUser({ ...formData, referralCode }));
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
      <div className="container">
        <div className="row align-items-center justify-content-center justify-content-xl-start">
          <div className="col-12 col-sm-10 col-md-6">
            <div className="welcome alt-color text-center text-md-start pt-120 pb-120 position-relative z-0">
              <h1 className="display-one">Welcome Back!</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 col-xxl-5 offset-xxl-1 text-center ms-xl-auto">
            <div className="sign__content ms-md-5 ms-xxl-0 pt-120 pb-120">
              <div className="head_part">
                <a href="/">
                  <img src="/w-coin-removebg-preview.png" alt="Logo" />
                </a>
                <h5 className="mt-5 mt-lg-6">Sign up to Your Account</h5>
              </div>

              <div
                // onSubmit={handleSubmit}
                className="contact__form mt-8 mt-lg-10 text-start">
                <div className="d-flex flex-column gap-5 gap-lg-6">
                  <div className="single-input">
                    <label className="mb-2 nw1-color">Full Name</label>
                    <input
                      type="text"
                      className="fs-six-up bg_transparent"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                    />
                    {errors.name && (
                      <small className="text-danger">{errors.name}</small>
                    )}
                  </div>

                  <div className="single-input">
                    <label className="mb-2 nw1-color">Phone</label>
                    <input
                      type="tel"
                      className="fs-six-up bg_transparent"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                    />
                    {errors.phone && (
                      <small className="text-danger">{errors.phone}</small>
                    )}
                  </div>

                  <div className="single-input">
                    <label className="mb-2 nw1-color">Email</label>
                    <input
                      type="email"
                      className="fs-six-up bg_transparent"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                    />
                    {errors.email && (
                      <small className="text-danger">{errors.email}</small>
                    )}
                  </div>

                  <div className="single-input">
                    <CustomCountrySelect
                      value={formData.country}
                      onChange={(selectedCountry) =>
                        setFormData((prev) => ({
                          ...prev,
                          country: selectedCountry,
                        }))
                      }
                      label="Country"
                    />
                    {errors.country && (
                      <small className="text-danger">{errors.country}</small>
                    )}
                  </div>

                  <div className="single-input">
                    <label className="mb-2 nw1-color">Password</label>
                    <div className="input-pass position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="fs-six-up bg_transparent pe-13"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                      />
                      <span
                        className="password-eye-icon position-absolute"
                        style={{ right: 10, top: 10, cursor: "pointer" }}
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

                  <div className="single-input">
                    <label className="mb-2 nw1-color">Confirm Password</label>
                    <div className="input-pass position-relative">
                      <input
                        type={showPassword2 ? "text" : "password"}
                        className="fs-six-up bg_transparent pe-13"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                      />
                      <span
                        className="password-eye-icon position-absolute"
                        style={{ right: 10, top: 10, cursor: "pointer" }}
                        onClick={() => setShowPassword2((prev) => !prev)}>
                        {showPassword2 ? <FaRegEye /> : <FaRegEyeSlash />}
                      </span>
                    </div>
                    {errors.confirmPassword && (
                      <small className="text-danger d-block mt-1">
                        {errors.confirmPassword}
                      </small>
                    )}
                  </div>
                </div>

                <label className="checkbox-single d-flex align-items-center nw1-color mt-3">
                  <span className="checkbox-area d-center">
                    <input type="checkbox" required />
                    <span className="checkmark d-center" />
                  </span>
                  I accept the privacy policy
                </label>

                <div className="mt-7 mt-lg-8">
                  <button
                    // type="submit"
                    onClick={handleSubmit}
                    className="cmn-btn py-3 px-5 px-lg-6 mt-7 mt-lg-8 w-100 d-center"
                    disabled={loader}>
                    {loader ? "Creating Account..." : "Sign Up"}
                  </button>
                </div>
              </div>

              <div className="mt-8 mt-lg-10">
                <p>
                  Already have an account? <a href="/sign-in">Log in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPageContents;
