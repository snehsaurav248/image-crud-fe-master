import React from "react";

// styles
import "./Login.css";

// firebase
import { provider } from "../../firebase";
import { getAuth, signInWithPopup } from "firebase/auth";

function Login({ setIsUserLoggedIn }) {
  const onLogin = () => {
    const auth = getAuth();
    console.log("getAuth", auth);
    signInWithPopup(auth, provider)
      .then((data) => setIsUserLoggedIn(true))
      .catch((err) => console.error(err));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "60vh",
      }}
    >
      <p>Please login to continue</p>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default Login;
