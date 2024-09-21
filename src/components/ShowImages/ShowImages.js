import React, { useState } from "react";
import "./ShowImages.css";

function ShowImages({ image, images }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!image || !images || images.length === 0) return null;

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="show-images-container">
      <img
        src={image.path}
        alt="thumbnail"
        className="image-thumbnail"
        onClick={() => openModal(images.indexOf(image))}
      />

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentImageIndex].path}
              alt="full-size"
              className="full-size-image"
            />
            <div className="modal-navigation">
              <button className="nav-button" onClick={prevImage}>&lt;</button>
              <button className="nav-button" onClick={nextImage}>&gt;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowImages;
