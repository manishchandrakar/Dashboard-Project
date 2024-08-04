// src/components/Dashboard/Dashboard.js
import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Stats from '../Stats/Stats';
import ActivityChart from '../ActivityChart/ActivityChart';
import RecentOrders from '../RecentOrders/RecentOrders';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <h1>Dashboard</h1>
          <Stats />
          <div className="dashboard-grid">
            <ActivityChart />
            <div className="dashboard-sidebar">
              <div className="quick-menu">
                <div className="menu-item">
                  <span className="icon">🎯</span>
                  Goals
                  <span className="arrow">▶</span>
                </div>
                <div className="menu-item">
                  <span className="icon">🍽️</span>
                  Popular Dishes
                  <span className="arrow">▶</span>
                </div>
                <div className="menu-item">
                  <span className="icon">📋</span>
                  Menus
                  <span className="arrow">▶</span>
                </div>
              </div>
              <CustomerFeedback />
            </div>
          </div>
          <RecentOrders />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;