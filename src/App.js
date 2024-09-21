import React, { useEffect, useState } from "react";
import "./App.css";

// components
import ImageUpload from "./components/ImageUpload/ImageUpload";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ShowImages from "./components/ShowImages/ShowImages";

// firebase
import { getAuth } from "firebase/auth";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const auth = getAuth();

    // Check authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsUserLoggedIn(!!user);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  useEffect(() => {
    // Fetch images from the server
    const fetchImages = async () => {
      try {
        const response = await fetch("https://image-crud-be.onrender.com/fetch");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="app-container">
      {isUserLoggedIn ? (
        <>
          <Navbar setIsUserLoggedIn={setIsUserLoggedIn} />
          <ImageUpload />
          <div className="image-card-container">
            {images.map((image, index) => (
              <ShowImages key={index} image={image} images={images} />
            ))}
          </div>
        </>
      ) : (
        <Login setIsUserLoggedIn={setIsUserLoggedIn} />
      )}
    </div>
  );
}

export default App;
