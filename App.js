import React, { useEffect, useState } from "react";
import "./App.css";

// components
import ImageCard from "./components/ImageCard/ImageCard";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import ShowImages from "./components/ShowImages/ShowImages";

// firebase
import { getAuth } from "firebase/auth";

const imageCardData = [
  {
    id: 1,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
];

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const auth = getAuth();

    auth.onAuthStateChanged((user) => {
      console.log("user", user);
      // if user is authenticated
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
  }, []);

  useEffect(() => {
    fetch("https://image-crud-be.onrender.com/fetch")
      .then((data) => data.json())
      .then((response) => setImages(response));
  }, []);

  return (
    <div className="App">
      {isUserLoggedIn ? (
        <div>
          <Navbar setIsUserLoggedIn={setIsUserLoggedIn} />
          <ImageUpload />
          <div className="image-card-parent-container">
            {" "}
            {images.map((image, key) => (
              <ShowImages key={key} image={image} />
            ))}
          </div>
        </div>
      ) : (
        <Login setIsUserLoggedIn={setIsUserLoggedIn} />
      )}
    </div>
  );
}

export default App;
