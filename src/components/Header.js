import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

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
      <div className="header-content">
        <h1>Steadfast Exteriors</h1>
        <button className="menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      {/* Drawer Menu */}
      <div className={`drawer ${isMenuOpen ? "open" : ""}`}>
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
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
                onClick={closeMenu}
              >
                Contact
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
      </div>
    </header>
  );
};

export default Header;
