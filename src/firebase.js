import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDV72B8nwg7AyJ2SdGRc0oFbT8vytZ6WWE",
  authDomain: "image-crud-fe.firebaseapp.com",
  projectId: "image-crud-fe",
  storageBucket: "image-crud-fe.appspot.com",
  messagingSenderId: "845975782032",
  appId: "1:845975782032:web:1aa50fa8cda17a6f618e15",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export { provider };
