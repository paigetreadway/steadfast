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
      <h1 className="page-header">Reviews</h1>
      <div className="reviews-content">
        <div className="reviews-section">
          <div className="google-reviews">
            <h2>Google Reviews</h2>
            <p className="review-description">
              Check out what our customers are saying about us on Google!
            </p>

            {/* {loading && <div className="loading">Loading reviews...</div>}
            {error && <div className="error">{error}</div>}

            <div className="reviews-grid">
              {Array.isArray(reviews) && reviews.length > 0
                ? reviews.map((review, index) => (
                    <div key={index} className="review-card">
                      <div className="review-header">
                        <img
                          src={review.profile_photo_url}
                          alt={review.author_name}
                          className="reviewer-photo"
                        />
                        <div className="reviewer-info">
                          <h3>{review.author_name}</h3>
                          <div className="rating">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`star ${
                                  i < review.rating ? "filled" : ""
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="review-text">{review.text}</p>
                      <p className="review-date">
                        {new Date(review.time * 1000).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                : !loading && <div>No reviews found.</div>}
            </div> */}

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
                href="https://search.google.com/local/writereview?placeid=ChIJkyVWLIRhYYgRitxukHFicLg" // Replace with your actual Place ID
                target="_blank"
                rel="noopener noreferrer"
                className="review-button"
              >
                Write a Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
