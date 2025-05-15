import React from "react";
import "./Home.css";
import logo from "../assets/logos/steadfast-logo.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="construction-message">
        <img
          src={logo}
          alt="Steadfast Exteriors Logo"
          className="company-logo"
        />
        <h2>COMING SOON!!</h2>
        <h3>Website Under Construction</h3>
        <p>
          For more information contact:
          <br />
          Ed at <a href="tel:615-542-2081">615-542-2081</a>
          <br />
          or
          <br />
          Allen at <a href="tel:615-542-0208">615-542-0208</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
