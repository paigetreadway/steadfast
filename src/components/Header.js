import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    // Update active path when URL changes
    setActivePath(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? "hidden" : "visible";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "visible";
  };

  const handleNavClick = (path) => {
    setActivePath(path);
    closeMenu();
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
      <div className={`drawer-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <button className="close-button" onClick={closeMenu}>
            <span>&times;</span>
          </button>
        </div>
        <nav className="drawer-nav">
          <ul>
            <li>
              <a
                href="/"
                className={activePath === "/" ? "active" : ""}
                onClick={() => handleNavClick("/")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={activePath === "/about" ? "active" : ""}
                onClick={() => handleNavClick("/about")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className={activePath === "/services" ? "active" : ""}
                onClick={() => handleNavClick("/services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className={activePath === "/projects" ? "active" : ""}
                onClick={() => handleNavClick("/projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/reviews"
                className={activePath === "/reviews" ? "active" : ""}
                onClick={() => handleNavClick("/reviews")}
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={activePath === "/contact" ? "active" : ""}
                onClick={() => handleNavClick("/contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
