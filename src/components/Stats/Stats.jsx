// src/components/Stats/Stats.js
import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <div className="stats">
      <div className="stat-item">
        <h3>Total Orders</h3>
        <p>75</p>
        <span className="increase">↑ 3%</span>
      </div>
      <div className="stat-item">
        <h3>Total Delivered</h3>
        <p>70</p>
        <span className="decrease">↓ 3%</span>
      </div>
      <div className="stat-item">
        <h3>Total Cancelled</h3>
        <p>05</p>
        <span className="increase">↑ 3%</span>
      </div>
      <div className="stat-item">
        <h3>Total Revenue</h3>
        <p>$12k</p>
        <span className="decrease">↓ 3%</span>
      </div>
      <div className="stat-item net-profit">
        <h3>Net Profit</h3>
        <p>$6759.25</p>
        <span className="increase">↑ 3%</span>
        <div className="profit-percentage">
          <svg viewBox="0 0 36 36">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4285F4" strokeWidth="2" strokeDasharray="70, 100" />
            <text x="18" y="20.35" textAnchor="middle" fill="#4285F4" fontSize="0.5em">70%</text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Stats;