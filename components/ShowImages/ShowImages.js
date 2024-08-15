import React from "react";

// styles
import "./ShowImages.css";

function ShowImages({ image }) {
  return (
    <div className="show-images-container">
      <img src={image.path} alt="image" />
    </div>
  );
}

export default ShowImages;
