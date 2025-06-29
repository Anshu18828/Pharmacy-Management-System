import React, { useState } from 'react';
import './UserLoginRecords.css';

const UserLoginRecordsDashboard = () => {
  const [userLoginData, setUserLoginData] = useState([
    { id: 1, username: 'anshu', login_date: '2025-04-01', login_time: '09:00:00' },
    { id: 2, username: 'jaiwin', login_date: '2025-04-01', login_time: '09:15:00' },
    { id: 3, username: 'admin', login_date: '2025-04-01', login_time: '09:30:00' },
    { id: 4, username: 'zara', login_date: '2025-04-02', login_time: '08:45:00' },
    { id: 5, username: 'omprakash', login_date: '2025-04-02', login_time: '09:10:00' },
    // Add more records as needed
  ]);

  // State for the search functionality
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle adding new records (you can remove this if it's not needed)
  const handleAdd = () => {
    const newLoginRecord = {
      id: userLoginData.length + 1, // Increment ID
      username: 'newUser', // Example value
      login_date: new Date().toISOString().split('T')[0], // Current date
      login_time: new Date().toISOString().split('T')[1].split('.')[0], // Current login time
    };
    setUserLoginData([...userLoginData, newLoginRecord]);
  };

  // Function to handle the removal of records
  const handleRemove = (id) => {
    const updatedData = userLoginData.filter((record) => record.id !== id);
    setUserLoginData(updatedData);
  };

  // Function for searching the dataset
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter the records based on the search term
  const filteredLoginData = userLoginData.filter((record) => {
    return (
      record.username.includes(searchTerm) ||
      record.login_date.includes(searchTerm) ||
      record.login_time.includes(searchTerm)
    );
  });

  return (
    <div className="user-login-records-dashboard">
      <div className="top-controls">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="add-btn" onClick={handleAdd}>➕ Add</button>
      </div>

      <table className="login-records-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Login Date</th>
            <th>Login Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredLoginData.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.username}</td>
              <td>{record.login_date}</td>
              <td>{record.login_time}</td>
              <td>
                <button onClick={() => handleRemove(record.id)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserLoginRecordsDashboard;
