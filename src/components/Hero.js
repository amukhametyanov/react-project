import React from 'react';
import './Hero.css'; // Import the CSS
import astronautImage from '../images/astronaut laptop1.png';  // Import the image
import resume from '../images/Resume.docx';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={astronautImage} alt="Dev Photo" className="hero-photo" height="100" width="100" />
        <h2 className="p-2">Artur <span>Mukhametyanov</span></h2>
        <h1 className="prof-title">Web Developer</h1>
        <a href={resume} className="cta" download="artur-mukhametyanov.docx">
          Resume <i className="fa-solid fa-download"></i>
        </a>

      </div>

      <div className="learn-more">
        <a href="#skills" className="learn-more-link">
          <i className="fas fa-chevron-down"></i>
          <br />
          Learn more about what I do
          
          
        </a>
      </div>
    </section>
  );
};

export default Hero;
