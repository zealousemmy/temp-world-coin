"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./nav.style.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/market-data", label: "Markets" },
  { href: "/about-us", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/roadmap", label: "Roadmap" },
];

export default function SiteNav() {
  const pathname = usePathname() || "/";
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Lock body scroll when drawer is open + close on ESC
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setDrawerOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen]);

  return (
    <header className="navshell">
      <div className="navwrap">
        <div className="my-navbar">
          {/* Brand (left) */}
          <Link href="/" className="brand" aria-label="World Coin Home">
            <img src="/w-c-removebg-preview.png" alt="" className="brandLogo" />
          </Link>

          {/* Center links (desktop) */}
          <nav className="midLinks" aria-label="Primary">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`lnk ${isActive(href) ? "isActive" : ""}`}>
                {label}
              </Link>
            ))}
          </nav>

          {/* Right actions (desktop) */}
          <div className="actions">
            <Link href="/sign-in" className="login">
              Login
            </Link>
            <Link href="/sign-up" className="cta">
              Sign Up
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className={`menuToggle ${drawerOpen ? "open" : ""}`}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-controls="drawer"
            aria-expanded={drawerOpen ? "true" : "false"}
            onClick={() => setDrawerOpen((v) => !v)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <aside
        id="drawer"
        className={`drawer ${drawerOpen ? "show" : ""}`}
        role="dialog"
        aria-modal="true">
        <div className="drawerHead">
          <Link href="/" className="brand" onClick={() => setDrawerOpen(false)}>
            <img src="/w-c-removebg-preview.png" alt="" className="brandLogo" />
            {/* <span className="brandText">World Coin</span> */}
          </Link>
          <button
            className="closeX"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}>
            <span />
            <span />
          </button>
        </div>

        <nav className="drawerLinks">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`drawerItem ${isActive(href) ? "isActive" : ""}`}
              onClick={() => setDrawerOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="drawerActions">
          <Link
            href="/sign-in"
            className="login"
            onClick={() => setDrawerOpen(false)}>
            Login
          </Link>
          <Link
            href="/sign-up"
            className="cta"
            onClick={() => setDrawerOpen(false)}>
            Sign Up
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      <button
        className={`scrim ${drawerOpen ? "show" : ""}`}
        aria-hidden={drawerOpen ? "false" : "true"}
        tabIndex={-1}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Styles — NEW class names & design tokens */}
    </header>
  );
}
