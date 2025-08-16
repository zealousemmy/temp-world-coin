"use client";
import { changePassword } from "@/redux/features/profile/profile_service_syn";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
const ProfileComp = () => {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { wallet, editLoader, profile, profileLoader, passUpdateSuccess } =
    useSelector((state) => state.profile);

  console.log(profile, "profile page");

  const handleChangePassword = async () => {
    if (password.length <= 4) {
      toast("password too short");
    }
    dispatch(changePassword({password:password}));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast("copied to clipboard!");
      },
      (err) => {
        toast("Failed to copy text.");
      }
    );
  };


  return (
    <div className="container-fluid content-inner pb-0">
      <div className="row">
        <div className="col-xl-3 col-lg-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title"></h4>
              </div>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <div className="profile-img-edit position-relative">
                    <img
                      class="img-fluid avatar avatar-100 avatar-rounded"
                      src="../assets/images/avatars/01.png"
                      alt="profile-pic"
                    />
                    <div className="upload-icone bg-primary">
                      <svg
                        class="upload-button"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ffffff"
                          d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                        />
                      </svg>
                      <input class="file-upload" type="file" accept="image/*" />
                    </div>
                  </div>
                  <div className="img-extension mt-3">
                    <div className="d-inline-block align-items-center">
                      <span>Only</span>
                      <a href="javascript:void();">.jpg</a>
                      <a href="javascript:void();">.png</a>
                      <a href="javascript:void();">.jpeg</a>
                      <span>allowed</span>
                    </div>
                  </div>
                </div>
              </form>
              <div>
                  <button className="btn btn-secondary" type="button"  onClick={() =>
                      copyToClipboard(`https://www.cryp-tech.com/sign-up?ref=${wallet?.referralCode}`)
                    } >
                          <span>Copy Referral LinK</span>
                          <svg
                            className="rotate-45"
                            width={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.25 12.2744L19.25 12.2744"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                  </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-8">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Profile Information</h4>
              </div>
            </div>
            <div className="card-body">
              <div className="new-user-info">
                <>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label class="htmlForm-label" for="fname">
                        Full Name:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="fname"
                        value={profile?.name}
                        placeHolder="First Name"
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label class="htmlForm-label" for="email">
                        Email:
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        value={profile?.email}
                        placeHolder="Email"
                      />
                    </div>
                    {/* <div className="form-group col-md-6">
                      <label class="htmlForm-label" for="lname">
                        Last Name:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="lname"
                        placeHolder="Last Name"
                      />
                    </div> */}

                    {/* <div className="form-group col-sm-12">
                      <label className="form-label">Country:</label>
                      <select
                        name="type"
                        className="selectpicker form-control"
                        data-style="py-0"
                      >
                        <option>Select Country</option>
                        <option>Caneda</option>
                        <option>Noida</option>
                        <option>USA</option>
                        <option>India</option>
                        <option>Africa</option>
                      </select>
                    </div> */}
                    <div className="form-group col-md-6">
                      <label class="htmlForm-label" for="mobno">
                        Mobile Number:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="mobno"
                        placeHolder="Mobile Number"
                        value={profile?.phone}
                      />
                    </div>

                    {/* <div className="form-group col-md-12">
                      <label class="htmlForm-label" for="city">
                        Town/City:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="city"
                        placeHolder="Town/City"
                      />
                    </div> */}
                  </div>
                  <hr />
                  <h5 className="mb-3">Security</h5>
                  <div className="row">
                    {/* <div className="form-group col-md-12">
                      <label class="htmlForm-label" for="uname">
                        User Name:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="uname"
                        placeHolder="User Name"
                      />
                    </div> */}
                    <div className="form-group col-md-6">
                      <label class="htmlForm-label" for="pass">
                        Password:
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="pass"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeHolder="Password"
                      />
                    </div>
                    {/* <div className="form-group col-md-6">
                      <label class="htmlForm-label" for="rpass">
                        Repeat Password:
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="rpass"
                        placeHolder="Repeat Password "
                      />
                    </div> */}
                  </div>
                  <div className="checkbox">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label class="form-label">
                      Enable Two-Factor-Authentication
                    </label>
                  </div>
                  <div className="mt-3">
                    <button
                      onClick={handleChangePassword}
                      type="submit"
                      className="btn btn-primary"
                    >
                      {editLoader ? "updating..." : "Update password"}
                    </button>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComp;
