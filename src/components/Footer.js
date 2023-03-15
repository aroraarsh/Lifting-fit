import React from 'react';
import { GrInstagram } from 'react-icons/gr';

const handleInstagramClick = () => {
  window.open("https://www.instagram.com/lifting.fit", "_blank");
};
const handleContactClick = () => {
    window.open("https://forms.gle/6pMybevbUf1HnvQK6", "_blank");
}
const Footer = () => (
  <footer className="footer bg-teal-600 text-white p-10 pb-10 flex justify-between items-center">
    <div className="contact">
  {/* <h3>Contact Us</h3> */}
 <h3><a href="\" onClick={handleContactClick}>Contact us</a></h3> 
</div>
    <div className="instagram">
      <a href="\" onClick={handleInstagramClick}>
        <GrInstagram size={32} className="mr-2" />
      </a>
    </div>
    <div className="coming-soon">
      <h3>Coming soon...</h3>
    </div>
  </footer>
);

export default Footer;
