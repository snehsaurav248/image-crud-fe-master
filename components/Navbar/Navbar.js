import React from "react";

// styles
import "./Navbar.css";

// firebase
import { getAuth } from "firebase/auth";

function Navbar() {
  const auth = getAuth();

  const onLogout = ({ setIsUserLoggedIn }) => {
    auth
      .signOut()
      .then(() => setIsUserLoggedIn(false))
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar-container">
      <div>
        <p>Logo</p>
      </div>
      <div>
        <p onClick={onLogout}>Logout</p>
      </div>
    </div>
  );
}

export default Navbar;
