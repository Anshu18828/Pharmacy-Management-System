import React, { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NavigationTabs from './components/NavigationTabs';
import './App.css';

function App() {
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);

  const handleStart = () => {
    setShowDashboard(false);
  };

  // Centralizing the render logic into a renderContent function
  const renderContent = () => {
    // If the user is viewing the Dashboard, show the Dashboard component
    if (showDashboard) {
      return <Dashboard onStart={handleStart} />;
    }

    // If the user has not signed up, show the Signup component
    if (!hasSignedUp) {
      return <Signup onSuccess={() => setHasSignedUp(true)} />;
    }

    // If the user has signed up but is not logged in, show the Login component
    if (!isLoggedIn) {
      return <Login onSuccess={() => setIsLoggedIn(true)} />;
    }

    // If the user is logged in, show the Navigation Tabs
    return <NavigationTabs />;
  };

  return (
    <div className="app-wrapper">
      {/* Render dynamic content based on user states */}
      {renderContent()}
    </div>
  );
}

export default App;
