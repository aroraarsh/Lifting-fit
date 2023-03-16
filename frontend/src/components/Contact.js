import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Contact = () => {
  const handleContactClick = () => {
    window.open('https://www.instagram.com/lifting.fit/', '_blank');
  };

  return (
    <div>
      <button onClick={handleContactClick}>Contact Us</button>
    </div>
  );
};

export default Contact;
