// src/components/Sidebar/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">🍔</div>
      <nav>
        <ul>
          <li className="active">🏠</li>
          <li>📊</li>
          <li>📝</li>
          <li>💳</li>
          <li>📁</li>
        </ul>
      </nav>
      <div className="refresh-button">🔄</div>
    </aside>
  );
};

export default Sidebar;