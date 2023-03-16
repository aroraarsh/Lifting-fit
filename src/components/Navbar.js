import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
    function handleClick() {
        navigate('/');
      }

    return (
        <nav className="bg-teal-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a onClick={handleClick} className="text-2xl font-normal tracking-wider hover:underline flex-1 text-center">Lifting fit</a>
          </div>
        </nav>
      );
      
};

export default Navbar;
