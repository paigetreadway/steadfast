import React, { useState, useEffect } from "react";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/reviews");
        const data = await response.json();
        console.log("Fetched reviews:", data); // Debug: see what you get
        // Ensure reviews is always an array
        if (Array.isArray(data)) {
          setReviews(data);
        } else if (data && Array.isArray(data.reviews)) {
          setReviews(data.reviews);
        } else {
          setReviews([]);
        }
      } catch (err) {
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="reviews-container">
      <div className="reviews-content">
        <div className="reviews-section">
          <div className="reviews-grid-layout">
            <div className="reviews-info">
              <div className="google-reviews">
                <h2>Google Reviews</h2>
                <p className="review-description">
                  Check out what our customers are saying about us on Google!
                </p>
                <div className="review-actions">
                  <a
                    href="https://maps.app.goo.gl/ctj3LXsrWJvupyeL9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-button"
                  >
                    View Reviews on Google
                  </a>
                  <a
                    href="https://search.google.com/local/writereview?placeid=ChIJkyVWLIRhYYgRitxukHFicLg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-button"
                  >
                    Write a Review
                  </a>
                </div>
              </div>
            </div>
            <div className="google-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.988770096801!2d-86.2314804!3d35.4303082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886161842c562593%3A0xb8706271906edc8a!2sSteadfast%20Exteriors%20and%20General%20Contracting%20LLC!5e0!3m2!1sen!2sus!4v1749696489179!5m2!1sen!2sus"
                width="400"
                height="250"
                style={{
                  border: 0,
                  width: "100%",
                  maxWidth: "600px",
                  minHeight: "300px",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Steadfast Exteriors Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
