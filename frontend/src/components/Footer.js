import React from 'react';
import { GrInstagram } from 'react-icons/gr';

const handleInstagramClick = () => {
  window.open("https://www.instagram.com/lifting.fit", "_blank");
};

const handleContactClick = () => {
  window.open("https://forms.gle/6pMybevbUf1HnvQK6", "_blank");
};

const Footer = () => (
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
        <h3 className="text-lg">Coming soon...</h3>
      </div>
    </div>
  </footer>
);

export default Footer;
