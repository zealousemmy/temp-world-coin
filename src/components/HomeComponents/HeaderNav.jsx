"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const HeaderNav = () => {
  const pathname = usePathname() || "/";
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const LG = 992; // Bootstrap lg breakpoint

  // Decide mobile vs desktop and clear mobile state when going desktop
  useEffect(() => {
    const sync = () => {
      const mobile = window.innerWidth < LG;
      setIsMobile(mobile);
      if (!mobile) setOpen(false); // desktop: keep nav visible (no collapse)
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (isMobile) setOpen(false);
  }, [pathname, isMobile]);

  const navItems = [
    { href: "/", label: "home" },
    { href: "/market-data", label: "Markets" },
    { href: "/about-us", label: "about" },
    { href: "/education", label: "Education" },
    { href: "/roadmap", label: "roadmap" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="header-section a2-bg-0 header-section--secondary header-menu w-100">
      <div className="container d-center">
        <nav className="navbar a2-lg-bg py-5 p-lg-5 rounded-3 navbar-expand-lg w-100 justify-content-between">
          {/* Brand + Toggler */}
          <div className="d-flex lg:flex-row flex-row-reverse justify-between  w-[100%] lg:w-[15%] align-items-center">
            {/* Manual toggler: adds/removes 'show' only on mobile */}
            <button
              className={`navbar-toggler ms-4 d-lg-none ${open ? "open" : ""}`}
              type="button"
              aria-label="Navbar Toggler"
              aria-controls="navbar-content"
              aria-expanded={open ? "true" : "false"}
              id="nav-icon3"
              onClick={() => setOpen((v) => !v)}>
              <span />
              <span />
              <span />
              <span />
            </button>

            <a
              href="/"
              className="navbar-brand m-0 p-0 d-flex align-items-center gap-5 gap-xl-5 me-2">
              <img
                src="/w-c-removebg-preview.png"
                className="logo small_logo d-sm-none"
                alt="logo"
              />
              <img
                src="/w-c-removebg-preview.png"
                className="logo d-none d-sm-flex"
                alt="logo"
              />
            </a>
          </div>

          {/* Collapsible menu:
              - mobile: 'collapse' + optional 'show'
              - desktop: no 'collapse' class at all */}
          <div
            id="navbar-content"
            className={`${
              isMobile ? ` ${open ? "show collaps" : "collapse"}` : ""
            } navbar-collapse justify-content-center`}>
            <ul className="navbar-nav gap-2 gap-lg-3 gap-xxl-8 align-self-center mx-auto mt-4 mt-lg-0">
              {navItems.map(({ href, label }) => (
                <li className="nav-item" key={href}>
                  <a
                    href={href}
                    className={`nav-link text-capitalize ${
                      isActive(href) ? "active" : ""
                    }`}
                    onClick={() => isMobile && setOpen(false)} // close after tap
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile actions: inside the collapsible area */}
            <div className="right-area position-relative ms-0 d-center gap-2 d-lg-none pb-4">
              <div className="single-item">
                <a
                  href="/sign-in"
                  className="rotate_eff flex-nowrap py-1 px-3 d-center gap-1 fw-bold nw1-color"
                  onClick={() => setOpen(false)}>
                  Login <i className="ti ti-arrow-right fs-six-up" />
                </a>
              </div>
              <div className="single-item">
                <a
                  href="/sign-up"
                  className="cmn-btn fw-bold py-2 px-3 align-items-center gap-1"
                  onClick={() => setOpen(false)}>
                  Sign Up{" "}
                  <i className="ti ti-arrow-right fw-semibold fs-six-up" />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop actions: always visible on >= lg */}
          <div className="right-area position-relative ms-0 d-center gap-1 gap-xl-4 d-none d-lg-flex">
            <div className="single-item">
              <a
                href="/sign-in"
                className="rotate_eff flex-nowrap py-1 px-2 px-xl-3 d-center gap-1 fw-bold nw1-color">
                Login <i className="ti ti-arrow-right fs-six-up" />
              </a>
            </div>
            <div className="single-item">
              <a
                href="/sign-up"
                className="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1">
                Sign Up{" "}
                <i className="ti ti-arrow-right fw-semibold fs-six-up" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
