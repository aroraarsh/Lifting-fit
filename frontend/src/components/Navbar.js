import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [showDropdown, setShowDropdown] = useState(false);

  function handleClick() {
    navigate('/Homepage');
  }

  const signOut = (e) => {
    auth.signOut().then(() => {
      localStorage.removeItem("idToken");
      localStorage.removeItem("user");
    });
    navigate('/')
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-900 text-white py-3 px-6 md:py-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <a onClick={handleClick} className="text-lg font-bold tracking-wider hover:text-teal-300 flex items-center">
          <span className="text-teal-300 mr-2">Lifting</span> Fit
        </a>
        {user ?
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
              <span className="text-base font-medium tracking-wider hover:text-teal-300 mr-3">
                {user.displayName}
              </span>
              <img referrerPolicy="no-referrer" className="w-7 h-7 rounded-full mr-3" src={user.photoURL} alt="" />
              <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 00-6.93 6.07A6 6 0 014 10a6 6 0 1112 0 6 6 0 01-1.07 3.46A7 7 0 0010 3z" clipRule="evenodd" />
              </svg>
            </button>
            {showDropdown &&
              <div className="absolute right-0 mt-2 py-2 w-36 bg-white rounded-md shadow-xl z-10">
                <a onClick={signOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">Sign Out</a>
              </div>
            }
          </div>
          :
          <div></div>
        }
      </div>
    </nav>
  );
};

export default Navbar;
