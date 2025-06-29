import React from 'react';
import './Dashboard.css';
import pharmacyImage from '../assets/image.png';


function Dashboard({ onStart }) {
  return (
    <div className="dashboard-container">
      <h1>Welcome to Pharmacy Management System</h1>
      <p>
        Simplify your medicine inventory, monitor purchases, and manage transactions — all in one platform.
      </p>
      <img src={pharmacyImage} alt="Pharmacy Illustration" />
      <button onClick={onStart}>Get Started</button>
    </div>
  );
}

export default Dashboard;