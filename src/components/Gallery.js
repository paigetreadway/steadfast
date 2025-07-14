import React, { useState } from "react";
import "./Gallery.css";

const images = [
  {
    src: process.env.PUBLIC_URL + "/work/VBS-house.jpg",
    alt: "Custom Cabin Built for Local VBS",
    description:
      "We're proud to support our community! Steadfast Exteriors & General Contracting recently built and donated this custom log cabin-style prop for a local church's Vacation Bible School (VBS) program. It's always a joy to give back and help create fun, engaging spaces where kids can learn, grow, and enjoy the summer. Big thanks to our team for their hard work and heart!",
  },
  {
    src: process.env.PUBLIC_URL + "/work/barn-roof.jpg",
    alt: "New Gutter Installation on Barn",
    description:
      "We recently completed a gutter installation on this barn to help protect the structure from water damage and improve drainage around the foundation. The new system ensures better runoff control and adds a clean, finished look to the exterior.",
  },
  {
    src: process.env.PUBLIC_URL + "/work/door-after.jpg",
    alt: "Entry Door for Veteran's Home",
    description:
      "We had the honor of installing a new entry door for a Veteran's widow, helping improve both security and comfort in her home. It's always a privilege to give back to those who've served — Go Navy!",
  },
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (index) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Project Gallery</h2>
      <p className="gallery-description">
        Click on an image to see a description
      </p>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="gallery-image"
            onClick={() => openModal(idx)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
      {modalOpen && (
        <div
          className="gallery-modal-overlay"
          onClick={() => setModalOpen(false)}
        >
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-modal-content">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="gallery-modal-image"
              />
              <div className="gallery-modal-description">
                <h3>{images[selectedIndex].alt}</h3>
                <p>{images[selectedIndex].description}</p>
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
