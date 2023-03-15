import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-teal-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/Homepage" className="text-2xl font-normal tracking-wider hover:underline flex-1 text-center">Lifting fit</a>
          </div>
        </nav>
      );
      
};

export default Navbar;
