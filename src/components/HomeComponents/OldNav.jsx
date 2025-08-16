"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/market-data", label: "Markets" },
  { href: "/about-us", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/roadmap", label: "Roadmap" },
];

const GOLD = "#ffcb14";
const INK = "#0b0b0b";
const OFFWHITE = "#f2f4f5";

export default function HeaderNav() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  // Close drawer when route changes, lock body scroll when open
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="wc-header">
      <div className="container">
        <div className="wc-bar">
          {/* Brand (left) */}
          <Link href="/" className="wc-brand" aria-label="World Coin Home">
            <img src="/w-c-removebg-preview.png" alt="" className="wc-logo" />
            <span className="wc-title">World Coin</span>
          </Link>

          {/* Center links (desktop) */}
          <nav className="wc-links" aria-label="Primary">
            {NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`wc-link ${isActive(href) ? "active" : ""}`}>
                {label}
              </Link>
            ))}
          </nav>

          {/* Right actions (desktop) */}
          <div className="wc-actions">
            <Link href="/sign-in" className="wc-login">
              Login
            </Link>
            <Link href="/sign-up" className="wc-cta">
              Sign Up
            </Link>
          </div>

          {/* Burger (mobile only) */}
          <button
            className={`wc-burger ${open ? "open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="wc-drawer"
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen((v) => !v)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="wc-drawer"
        className={`wc-drawer ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true">
        <div className="wc-drawer-head">
          <Link href="/" className="wc-brand" onClick={() => setOpen(false)}>
            <img src="/w-c-removebg-preview.png" alt="" className="wc-logo" />
            <span className="wc-title">World Coin</span>
          </Link>
          <button
            className="wc-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}>
            <span />
            <span />
          </button>
        </div>

        <nav className="wc-drawer-links" aria-label="Mobile">
          {NAV.map(({ href, label }) => (
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

      {/* Background overlay (click to close) */}
      <button
        className={`wc-overlay ${open ? "open" : ""}`}
        aria-hidden={open ? "false" : "true"}
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />

      <style jsx>{`
        .wc-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: transparent;
        }

        .wc-bar {
          margin: 22px auto 0;
          background: ${INK};
          border-radius: 14px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
        }

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
          color: ${OFFWHITE};
          font-size: 20px;
          letter-spacing: 0.2px;
        }

        .wc-links {
          justify-self: center;
          display: none;
          gap: 6px;
        }
        .wc-link {
          color: #e9ebef;
          text-decoration: none;
          font-weight: 800;
          padding: 10px 16px;
          border-radius: 8px;
          display: inline-block;
          transition: color 0.18s ease;
        }
        .wc-link:hover {
          color: ${GOLD};
        }
        .wc-link.active {
          color: ${GOLD};
        }

        .wc-actions {
          display: none;
          align-items: center;
          gap: 14px;
        }
        .wc-login {
          color: ${OFFWHITE};
          text-decoration: none;
          font-weight: 800;
        }
        .wc-cta {
          background: ${GOLD};
          color: ${INK};
          text-decoration: none;
          font-weight: 800;
          padding: 10px 18px;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

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
          background: ${GOLD};
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

        .wc-drawer {
          position: fixed;
          inset: 0;
          background: ${INK};
          transform: translateY(-100%);
          transition: transform 0.28s ease;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 1001;
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
          background: ${GOLD};
          border-radius: 3px;
        }
        .wc-close span:first-child {
          transform: translateY(-50%) rotate(45deg);
        }
        .wc-close span:last-child {
          transform: translateY(-50%) rotate(-45deg);
        }

        .wc-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-top: 24px;
        }
        .wc-drawer-link {
          color: ${OFFWHITE};
          text-decoration: none;
          font-weight: 900;
          font-size: 22px;
        }
        .wc-drawer-link.active {
          color: ${GOLD};
        }

        .wc-drawer-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 18px;
          padding: 8px 4px 4px;
        }
        .wc-drawer-actions .wc-cta {
          padding: 12px 22px;
          border-radius: 18px;
        }

        .wc-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
          z-index: 1000;
        }
        .wc-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        /* Desktop breakpoint */
        @media (min-width: 992px) {
          .wc-links {
            display: inline-flex;
          }
          .wc-actions {
            display: inline-flex;
          }
          .wc-burger,
          .wc-drawer,
          .wc-overlay {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
