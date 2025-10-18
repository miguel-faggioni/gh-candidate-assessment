import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__title">🎵 MusicFeed</h1>
        <p className="header__subtitle">
          Discover what your friends are listening to and share your favorite tracks
        </p>
      </div>
    </header>
  );
};

export default Header;
