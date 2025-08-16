"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/market-data", label: "Markets" },
  { href: "/about-us", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/roadmap", label: "Roadmap" },
];

export default function HeaderNav() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  // lock/unlock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on route change + ESC
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const isActive = useCallback(
    (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href)),
    [pathname]
  );

  return (
    <header className="wc-header">
      <div className="container">
        <div className="wc-bar">
          {/* Left: Brand */}
          <Link href="/" className="wc-brand">
            <img
              src="/w-c-removebg-preview.png"
              alt="World Coin"
              className="wc-logo"
            />
            <span className="wc-title">World Coin</span>
          </Link>

          {/* Center: Desktop Nav */}
          <nav className="wc-links">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`wc-link ${isActive(href) ? "active" : ""}`}>
                {label}
              </Link>
            ))}
          </nav>

          {/* Right: Desktop actions */}
          <div className="wc-actions">
            <Link href="/sign-in" className="wc-login">
              Login
            </Link>
            <Link href="/sign-up" className="wc-cta">
              Sign Up
            </Link>
          </div>

          {/* Mobile: burger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className={`wc-burger ${open ? "open" : ""}`}
            onClick={() => setOpen((v) => !v)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`wc-drawer ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true">
        <div className="wc-drawer-head">
          <Link href="/" className="wc-brand">
            <img
              src="/w-c-removebg-preview.png"
              alt="World Coin"
              className="wc-logo"
            />
            <span className="wc-title">World Coin</span>
          </Link>

          <button
            aria-label="Close menu"
            className="wc-close"
            onClick={() => setOpen(false)}>
            <span />
            <span />
          </button>
        </div>

        <nav className="wc-drawer-links">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`wc-drawer-link ${isActive(href) ? "active" : ""}`}
              onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="wc-drawer-actions">
          <Link
            href="/sign-in"
            className="wc-login"
            onClick={() => setOpen(false)}>
            Login
          </Link>
          <Link
            href="/sign-up"
            className="wc-cta"
            onClick={() => setOpen(false)}>
            Sign Up
          </Link>
        </div>
      </div>

      {/* Scoped styles */}
      <style jsx>{`
        /* wrapper */
        .wc-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: transparent;
        }

        /* black rounded bar */
        .wc-bar {
          margin: 22px auto 0;
          background: #0b0b0b;
          border-radius: 14px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          position: relative;
        }

        /* brand */
        .wc-brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .wc-logo {
          height: 36px;
          width: 36px;
          object-fit: contain;
        }
        .wc-title {
          font-weight: 800;
          color: #f2f4f5;
          font-size: 20px;
          letter-spacing: 0.2px;
        }

        /* center links (desktop) */
        .wc-links {
          justify-self: center;
          display: none;
        }
        .wc-link {
          color: #e9ebef;
          text-decoration: none;
          font-weight: 800;
          padding: 10px 16px;
          border-radius: 8px;
          display: inline-block;
          transition: color 0.2s ease;
        }
        .wc-link:hover {
          color: #ffcb14;
        }
        .wc-link.active {
          color: #ffcb14; /* gold highlight like screenshot */
        }

        /* right actions (desktop) */
        .wc-actions {
          display: none;
          align-items: center;
          gap: 14px;
        }
        .wc-login {
          color: #f2f4f5;
          text-decoration: none;
          font-weight: 800;
        }
        .wc-cta {
          background: #ffcb14;
          color: #0b0b0b;
          text-decoration: none;
          font-weight: 800;
          padding: 10px 18px;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* burger (mobile only) */
        .wc-burger {
          display: inline-flex;
          flex-direction: column;
          justify-self: end;
          gap: 6px;
          width: 28px;
          height: 22px;
          background: transparent;
          border: 0;
          padding: 0;
          cursor: pointer;
        }
        .wc-burger span {
          height: 3px;
          width: 100%;
          background: #ffcb14;
          border-radius: 3px;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .wc-burger.open span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        .wc-burger.open span:nth-child(2) {
          opacity: 0;
        }
        .wc-burger.open span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }

        /* mobile drawer */
        .wc-drawer {
          position: fixed;
          inset: 0;
          background: #0b0b0b;
          transform: translateY(-100%);
          transition: transform 0.28s ease;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .wc-drawer.open {
          transform: translateY(0);
        }
        .wc-drawer-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-right: 6px;
        }

        /* close button (gold X) */
        .wc-close {
          position: relative;
          width: 28px;
          height: 28px;
          background: transparent;
          border: 0;
          cursor: pointer;
        }
        .wc-close span {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 3px;
          background: #ffcb14;
          border-radius: 3px;
        }
        .wc-close span:first-child {
          transform: translateY(-50%) rotate(45deg);
        }
        .wc-close span:last-child {
          transform: translateY(-50%) rotate(-45deg);
        }

        /* drawer links */
        .wc-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-top: 24px;
        }
        .wc-drawer-link {
          color: #f2f4f5;
          text-decoration: none;
          font-weight: 900;
          font-size: 22px;
        }
        .wc-drawer-link.active {
          color: #ffcb14;
        }

        /* drawer bottom actions */
        .wc-drawer-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 18px;
          padding: 10px 4px 6px;
        }
        .wc-drawer-actions .wc-cta {
          padding: 12px 22px;
          border-radius: 18px;
        }

        /* breakpoints */
        @media (min-width: 992px) {
          .wc-burger,
          .wc-drawer {
            display: none;
          }
          .wc-links {
            display: flex;
            gap: 4px;
          }
          .wc-actions {
            display: inline-flex;
          }
        }
      `}</style>
    </header>
  );
}
