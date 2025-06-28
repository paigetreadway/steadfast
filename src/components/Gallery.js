import React, { useState } from "react";
import "./Gallery.css";

const imageSrc = process.env.PUBLIC_URL + "/work/VBS-house.jpg";

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Project Gallery</h2>
      <p className="gallery-description">
        Explore our work — click any image for a description.
      </p>
      <div className="gallery-grid">
        <img
          src={imageSrc}
          alt="VBS House"
          className="gallery-image"
          onClick={() => setModalOpen(true)}
          style={{ cursor: "pointer" }}
        />
      </div>
      {modalOpen && (
        <div
          className="gallery-modal-overlay"
          onClick={() => setModalOpen(false)}
        >
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-modal-content">
              <img
                src={imageSrc}
                alt="VBS House"
                className="gallery-modal-image"
              />
              <div
                className="gallery-modal-description"
                style={{ padding: "10px" }}
              >
                <h3 style={{ paddingBottom: "10px" }}>
                  Steadfast Exteriors Supports Local VBS Program
                </h3>
                <p>
                  We're proud to support our community! Steadfast Exteriors &
                  General Contracting recently built and donated this custom log
                  cabin-style prop for a local church's Vacation Bible School
                  (VBS) program. It's always a joy to give back and help create
                  fun, engaging spaces where kids can learn, grow, and enjoy the
                  summer. Big thanks to our team for their hard work and heart!
                </p>
              </div>
            </div>
            <button
              className="gallery-modal-close"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
