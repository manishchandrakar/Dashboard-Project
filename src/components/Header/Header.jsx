// src/components/Header/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="header-icons">
        <span className="icon">✉️</span>
        <span className="icon">⚙️</span>
        <span className="icon">🔔</span>
        <span className="user-avatar">👤</span>
      </div>
    </header>
  );
};

export default Header;