import React from "react";
import "./About.css";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="page-header">About Us</h1>
      <div className="about-content">
        <div className="about-section">
          <div className="mission-section">
            <h2>Our Mission</h2>
            <p>
              To provide exceptional customer service through open communication
              and solid construction experience.
            </p>
          </div>

          <div className="vision-section">
            <h2>Our Vision</h2>
            <p>
              Construction experts who have combined years of experience to
              provide quality construction outcomes; cultivate a Culture of
              Excellence rooted in trust, respect, and transparency; continually
              assessing themselves, their teams, and teammates; drive towards
              the best possible outcomes while staying aligned to best
              construction practices, manufacturer installation guides, and the
              International Residential Code; conduct ourselves in a
              consistently professional, ethical, and traditional manner.
            </p>
          </div>

          <div className="principles-section">
            <h2>Guiding Principles</h2>
            <div className="principles-grid">
              <Card className="principle-card">
                <CardMedia
                  component="img"
                  height="200"
                  image="/path-to-competency-image.jpg"
                  alt="Competency"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    className="principle-title"
                  >
                    Competency
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="principle-description"
                  >
                    {/* Add competency description here */}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    className="learn-more-btn"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="principle-card">
                <CardMedia
                  component="img"
                  height="200"
                  image="/path-to-character-image.jpg"
                  alt="Character"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    className="principle-title"
                  >
                    Character
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="principle-description"
                  >
                    {/* Add character description here */}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    className="learn-more-btn"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="principle-card">
                <CardMedia
                  component="img"
                  height="200"
                  image="/path-to-connections-image.jpg"
                  alt="Connections"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    className="principle-title"
                  >
                    Connections
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="principle-description"
                  >
                    {/* Add connections description here */}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    className="learn-more-btn"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
