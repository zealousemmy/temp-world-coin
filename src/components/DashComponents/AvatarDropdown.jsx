"use client";
import { useEffect, useRef, useState } from "react";

export default function AvatarDropdown({ handleLogout }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  // close on outside click + Esc
  useEffect(() => {
    const onClick = (e) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <ul
      ref={rootRef}
      className="navbar-nav ms-auto navbar-list mb-2 mb-lg-0 align-items-center">
      <li className={`nav-item dropdown ${open ? "show" : ""}`}>
        {/* use a button (not <a href="#">) to avoid page jumps */}
        <button
          type="button"
          className="nav-link py-0 d-flex align-items-center bg-transparent border-0"
          id="navbarDropdown"
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => setOpen((v) => !v)}>
          <img
            src="/assets/images/avatars/01.png"
            alt="User profile"
            className="img-fluid avatar avatar-50 avatar-rounded"
          />
        </button>

        <ul
          style={{ position: "absolute", right: "0.7rem" }}
          className={`dropdown-menu dropdown-menu-end ${open ? "show" : ""}`}
          aria-labelledby="navbarDropdown"
          role="menu">
          <li className="border-0">
            <a className="dropdown-item" href="/dashboard/profile">
              Profile
            </a>
          </li>
          <li className="border-0">
            <hr className="m-0 dropdown-divider" />
          </li>
          <li className="border-0">
            <button className="dropdown-item" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </li>

      {/* Fallback if you aren't loading Bootstrap CSS */}
      <style jsx global>{`
        .dropdown-menu {
          display: none;
        }
        .dropdown-menu.show {
          display: block;
        }
      `}</style>
    </ul>
  );
}
