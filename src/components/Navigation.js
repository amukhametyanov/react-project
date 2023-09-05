import React, { useEffect } from 'react';
import logo from '../images/logo1.png';  // Import the image
import './Navigation.css';

const Navigation = () => {

  useEffect(() => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('nav ul');
    const header = document.querySelector('.sticky-header');

    const handleClick = () => {
      mobileMenuButton.classList.toggle('active');
      navMenu.classList.toggle('show');

      // Explicitly call setMenuHeight after toggling
        setMenuHeight();
      
      if (navMenu.classList.contains('show')) {
        document.addEventListener('click', documentClickListener);
      } else {
        document.removeEventListener('click', documentClickListener);
      }
    };

    const setMenuHeight = () => {
      if (navMenu.classList.contains('show')) {
        navMenu.style.maxHeight = navMenu.scrollHeight + 'px';
      } else {
        navMenu.style.maxHeight = '0';
      }
    };

    const closeMenu = () => {
      mobileMenuButton.classList.remove('active');
      navMenu.classList.remove('show');
      setMenuHeight();
      document.removeEventListener('click', documentClickListener);
    };

    const documentClickListener = (event) => {
      if (!header.contains(event.target) && !mobileMenuButton.contains(event.target)) {
        closeMenu();
      }
    };

    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', handleClick);
    }

    setMenuHeight();

    const menuItems = document.querySelectorAll('nav ul li a');

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', () => {
        if (navMenu.classList.contains('show')) {
          closeMenu();
        }
      });
    });

    return () => {
      if (mobileMenuButton) {
        mobileMenuButton.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <header className="sticky-header">
      <nav className="top-nav">
        <img src={logo} alt="Logo" />
        <div className="desktop-menu">
            <ul>
                <li><a href="/">Resume</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#about-me">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        
        <button className="mobile-menu-button" id="mobile-menu-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </button>
      </nav>
    </header>
  );
};

export default Navigation;
