import React from "react";
import "./Navbar.css";
import { getAuth } from "firebase/auth";

function Navbar({ setIsUserLoggedIn }) {
  const auth = getAuth();

  const onLogout = () => {
    auth
      .signOut()
      .then(() => setIsUserLoggedIn(false))
      .catch((err) => console.error("Logout Error:", err));
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">MyApp</div>
      <div className="navbar-menu">
        <div className="navbar-item" onClick={onLogout}>
          Logout
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
