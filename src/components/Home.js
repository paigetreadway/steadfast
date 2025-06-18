import React from "react";
import "./Home.css";
import logo from "../assets/logos/steadfast-logo.png";
import roof from "../assets/logos/steadfast-house.png";
import { Link } from "react-router-dom";
import { FaAward, FaHandshake, FaLink } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <div className="roof-image-wrapper">
        <img src={roof} alt="Roof" className="roof-image" />
        <div className="roof-overlay"></div>
        <div className="roof-mission-content">
          <div className="roof-mission-text">
            Our mission is to provide exceptional customer service through open
            communication and solid construction experience.
          </div>
          <div className="button-container">
            <Link to="/support" className="support-btn">
              Get Support
            </Link>
            <Link to="/warranty" className="roof-warranty-btn">
              Submit Warranty Request
            </Link>
          </div>
        </div>
      </div>
      <div className="features-section">
        <div className="feature">
          <span className="feature-icon">
            <FaAward />
          </span>
          <h3>Competency</h3>
          <p>We bring years of experience and expertise to every project.</p>
        </div>
        <div className="feature">
          <span className="feature-icon">
            <FaHandshake />
          </span>
          <h3>Character</h3>
          <p>Integrity and honesty are at the core of everything we do.</p>
        </div>
        <div className="feature">
          <span className="feature-icon">
            <FaLink />
          </span>
          <h3>Connections</h3>
          <p>We build lasting relationships with our clients and partners.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
