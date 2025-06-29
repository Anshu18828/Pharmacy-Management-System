import React, { useState } from 'react';
import MedicineList from './MedicineList';
import SalesList from './SalesList';
import UserLoginRecordsList from './UserLoginRecordsList';
import UserSessionDurationList from './UserSessionDurationList';
import './NavigationTabs.css';

function NavigationTabs() {
  const [activeTab, setActiveTab] = useState('medicines');

  const renderTab = () => {
    switch (activeTab) {
      case 'medicines':
        return <MedicineList />;
      case 'sales':
        return <SalesList />;
      case 'login':
        return <UserLoginRecordsList />;
      case 'session':
        return <UserSessionDurationList />;
      default:
        return <MedicineList />;
    }
  };

  return (
    <div className="tabs-wrapper">
      <div className="tabs-nav">
        <button className={activeTab === 'medicines' ? 'active' : ''} onClick={() => setActiveTab('medicines')}>💊 Medicines</button>
        <button className={activeTab === 'sales' ? 'active' : ''} onClick={() => setActiveTab('sales')}>📈 Sales</button>
        <button className={activeTab === 'login' ? 'active' : ''} onClick={() => setActiveTab('login')}>🔐 Logins</button>
        <button className={activeTab === 'session' ? 'active' : ''} onClick={() => setActiveTab('session')}>⏱️ Sessions</button>
      </div>
      <div className="tabs-content">
        {renderTab()}
      </div>
    </div>
  );
}

export default NavigationTabs;
