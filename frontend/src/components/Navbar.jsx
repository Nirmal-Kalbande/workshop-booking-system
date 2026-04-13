import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ user, setUser }) {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <span className="logo-dot" />
          FOSSEE <em>Workshops</em>
        </Link>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <Link
            to="/"
            className={loc.pathname === "/" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/workshops"
            className={loc.pathname === "/workshops" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Workshops
          </Link>

          {/* ✅ FIXED HERE */}
          <Link
            to="/bookings"
            className={loc.pathname === "/bookings" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            My Bookings
          </Link>

          {user ? (
            <button
              className="nav-btn outline"
              onClick={() => {
                setUser(null);
                setOpen(false);
              }}
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="nav-btn filled"
              onClick={() => setOpen(false)}
            >
              Sign In
            </Link>
          )}
        </div>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <span className={open ? "x" : ""} />
          <span className={open ? "x" : ""} />
          <span className={open ? "x" : ""} />
        </button>
      </div>
    </nav>
  );
}