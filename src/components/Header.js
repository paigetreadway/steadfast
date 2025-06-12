import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? "hidden" : "visible";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "visible";
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="social-links">
          <a
            href="https://www.facebook.com/steadfastexteriorstn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://g.page/steadfastexteriorstn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogle className="social-icon google-icon" />
          </a>
        </div>
      </div>
      <div className="header-content">
        <h1>Steadfast Exteriors</h1>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/warranty"
                className={location.pathname === "/warranty" ? "active" : ""}
              >
                Warranty
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className={location.pathname === "/reviews" ? "active" : ""}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className={location.pathname === "/support" ? "active" : ""}
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {isMenuOpen && (
          <div className="mobile-dropdown-menu">
            <Link
              to="/"
              onClick={closeMenu}
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
            <Link
              to="/warranty"
              onClick={closeMenu}
              className={location.pathname === "/warranty" ? "active" : ""}
            >
              Warranty
            </Link>
            <Link
              to="/reviews"
              onClick={closeMenu}
              className={location.pathname === "/reviews" ? "active" : ""}
            >
              Reviews
            </Link>
            <Link
              to="/support"
              onClick={closeMenu}
              className={location.pathname === "/support" ? "active" : ""}
            >
              Support
            </Link>
          </div>
        )}
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      {/* Mobile Drawer Menu */}
      {/* <div className={`drawer ${isMenuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <button className="close-button" onClick={closeMenu}>
            <span>&times;</span>
          </button>
        </div>
        <nav className="drawer-nav">
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/warranty"
                className={location.pathname === "/warranty" ? "active" : ""}
                onClick={closeMenu}
              >
                Warranty
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className={location.pathname === "/reviews" ? "active" : ""}
                onClick={closeMenu}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className={location.pathname === "/support" ? "active" : ""}
                onClick={closeMenu}
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>
      </div> */}
    </header>
  );
};

export default Header;
