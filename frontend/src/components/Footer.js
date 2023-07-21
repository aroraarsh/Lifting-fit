import React from 'react';
import { GrInstagram } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom

const handleInstagramClick = () => {
  window.open("https://www.instagram.com/lifting.fit", "_blank");
};

const handleContactClick = () => {
  window.open("https://forms.gle/6pMybevbUf1HnvQK6", "_blank");
};

const Footer = () => {
  const navigate = useNavigate(); // Access the useNavigate hook

  const handleAboutClick = () => {
    navigate('/about'); // Use navigate to go to '/about' when the button is clicked
  };

  return (
    <footer className="sticky bottom-0 bg-gray-900 text-white py-5 px-6 md:py-6 md:px-12">
      <div className="container mx-auto flex justify-between items-center">
        <div className="contact">
          <h3 className="text-lg">
            <a href="/" onClick={handleContactClick} className="text-teal-300 hover:text-teal-200">
              Contact Us
            </a>
          </h3>
        </div>
        <div className="instagram">
          <a href="/" onClick={handleInstagramClick} className="text-teal-300 hover:text-teal-200">
            <GrInstagram size={32} className="mr-2" />
          </a>
        </div>
        <div className="coming-soon">
          {/* Change the h3 tag to a button */}
          <button onClick={handleAboutClick} className="text-lg text-teal-300 hover:text-teal-200">
            About Me
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
