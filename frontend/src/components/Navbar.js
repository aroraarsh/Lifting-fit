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
    <nav className="bg-teal-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a onClick={handleClick} className="text-2xl font-normal tracking-wider hover:text-teal-300 flex-1 text-left">
          <div className="mx-auto">
            Lifting Fit
          </div>
        </a>
        {user ?
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
              <span className="text-l font-normal tracking-wider hover:text-teal-300 mr-4">
                {user.displayName}
              </span>
              <img referrerPolicy="no-referrer" className="w-8 h-8 rounded-full mr-4" src={user.photoURL} alt="" />
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 00-6.93 6.07A6 6 0 014 10a6 6 0 1112 0 6 6 0 01-1.07 3.46A7 7 0 0010 3z" clipRule="evenodd" />
              </svg>
            </button>
            {showDropdown &&
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
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
