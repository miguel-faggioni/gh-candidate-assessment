import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__text">
            © {currentYear} MusicFeed. Share your favorite tracks and discover new music.
          </p>
          <div className="footer__links">
            <a 
              href="https://reactjs.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer__link"
            >
              React
            </a>
            <a 
              href="https://webpack.js.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer__link"
            >
              Webpack
            </a>
            <a 
              href="https://babeljs.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer__link"
            >
              Babel
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
