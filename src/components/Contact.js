import React from 'react';

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
