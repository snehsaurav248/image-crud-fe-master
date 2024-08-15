import React, { useState } from "react";

function ImageUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    console.log("e.target.files", e.target.files);
    setFile(e.target.files[0]);
  };

  const uploadFile = (e) => {
    const formData = new FormData();
    formData.append("pic", file);

    fetch(
      "https://image-crud-be.onrender.com/upload",
      {
        mode: "no-cors",
        method: "POST",
        body: formData,
      },
      {
        Headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
      .then((data) => console.log("Upload successful"))
      .catch((err) => {
        console.log("Upload failed");
      });
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
}

export default ImageUpload;
