import React from "react";

// styles
import "./ImageCard.css";

// mui icons
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import EventNoteIcon from "@mui/icons-material/EventNote";

function ImageCard({ cardDetails }) {
  return (
    <div className="image-card-container">
      <div className="image-card-personal-details">
        <p className="image-card-personal-details-name">{cardDetails.name}</p>
        <p className="image-card-personal-details-contact image-card-personal-details-reduce-margin">
          <LocalPhoneIcon fontSize="small" />
          {cardDetails.phoneNumber}
        </p>
        <p className="image-card-personal-details-contact">
          <EmailIcon fontSize="small" />
          {cardDetails.email}
        </p>
      </div>

      <div>
        <div className="image-card-details">
          <div className="align-sidewise">
            <EmailIcon fontSize="small" />
            <p>{cardDetails.date}</p>
          </div>

          <p>{cardDetails.share}</p>
          <img className="image-card-details-image" src={cardDetails.image} />
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
