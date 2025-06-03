import React from "react";
import "./Home.css";
import logo from "../assets/logos/steadfast-logo.png";
import roof from "../assets/logos/roof.png";
import { Link } from "react-router-dom";

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
            <Link to="/warranty" className="roof-contact-btn">
              Submit Warranty Request
            </Link>
            <Link to="/support" className="support-btn">
              Get Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
