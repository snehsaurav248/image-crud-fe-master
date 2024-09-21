import React, { useState } from "react";
import "./ImageUpload.css";

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
  };

  const uploadFile = () => {
    if (!file) {
      setMessage("Please select an image to upload.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("pic", file);

    fetch("https://image-crud-be.onrender.com/upload", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setMessage("Upload successful!");
        setFile(null);
      })
      .catch(() => setMessage("Upload failed. Please try again."))
      .finally(() => setLoading(false));
  };

  return (
    <div className="image-upload-container">
      <h2 className="upload-title">Upload Image</h2>
      <div className="file-input-container">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="custom-file-input"
        />
      </div>
      {file && <p className="file-name">Selected file: {file.name}</p>}
      <button
        className="upload-button"
        onClick={uploadFile}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
      {message && <p className="upload-message">{message}</p>}
    </div>
  );
}

export default ImageUpload;
