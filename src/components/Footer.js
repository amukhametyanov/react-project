import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-social">
          <ul className="social-icons">
            <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://www.linkedin.com/in/artur-mukhametyanov-0aa888118/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCeIyEXYRyOUnCJkQy6TRcOQ" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
            <li><a href="https://github.com/amukhametyanov" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          </ul>
        </div>

        <div className="footer-bottom mt-5">
          <p>&copy; 2023 Artur Mukhametyanov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
