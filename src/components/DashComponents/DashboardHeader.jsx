import React from "react";
import AvatarDropdown from "./AvatarDropdown";

const DashboardHeader = ({ handleShowSidebar, handleLogout }) => {
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  return (
    <nav
      // style={{ right: "0 !important" }}
      className="nav navbar navbar-expand-lg navbar-light iq-navbar  custom-fixed  border-bottom pb-lg-3 pt-lg-3">
      <div className="container-fluid">
        {/* <a href="/" className="navbar-brand"></a> */}
        <button
          onClick={handleShowSidebar}
          className="btn "
          data-toggle="sidebar"
          data-active="true">
          <span className="navbar-toggler-icon">
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </span>
          {/* <i className="icon">
            <svg width="20px" height="20px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </i> */}
        </button>
        <AvatarDropdown />
        {/* <ul className="navbar-nav ms-auto navbar-list mb-2 mb-lg-0 align-items-center">
          <li className="nav-item dropdown">
            <a
              className="nav-link py-0 d-flex align-items-center"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <img
                src="/assets/images/avatars/01.png"
                alt="User-Profile"
                className="img-fluid avatar avatar-50 avatar-rounded"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown">
              <li className="border-0">
                <a className="dropdown-item" href="/dashboard/profile">
                  Profile
                </a>
              </li>

              <li className="border-0">
                <hr className="m-0 dropdown-divider" />
              </li>
              <li className="border-0">
                <a className="dropdown-item" href="#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default DashboardHeader;
