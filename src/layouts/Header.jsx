import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import '../assets/scss/header.scss';
import Login from '../components/Login';

const Header = () => {
  const location = useLocation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after clicking
  };

  const handleNavClick = (sectionId) => (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={handleNavClick('about-section')}>ABOUT</Link>
            <Link to="/" onClick={handleNavClick('pricing-section')}>PRICING</Link>
            <Link to="/" onClick={handleNavClick('contact-section')}>CONTACT</Link>
            <button className="login-btn" onClick={() => {
              setIsLoginOpen(true);
              setIsMenuOpen(false);
            }}>LOGIN</button>
          </nav>
        </div>
      </header>
      
      <Login 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
};

export default Header;