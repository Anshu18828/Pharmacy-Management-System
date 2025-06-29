// src/components/DashboardMenu.js
import React from 'react';
import './DashboardMenu.css';

function DashboardMenu({ setView }) {
  return (
    <div className="menu-bar">
      <button onClick={() => setView('purchase')}>Medicine Purchase</button>
      <button onClick={() => setView('sales')}>Sales Dashboard</button>
      <button onClick={() => setView('login')}>Login Records</button>
      <button onClick={() => setView('session')}>Session Duration</button>
    </div>
  );
}

export default DashboardMenu;
