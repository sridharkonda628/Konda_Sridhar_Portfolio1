import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-4 mt-5">
      <div className="container">
        <p>Connect with me:</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="www.linkedin.com/in/konda-sridhar-685971276" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </div>
        <p className="mt-3">&copy; 2023 [Konda Sridhar]. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;