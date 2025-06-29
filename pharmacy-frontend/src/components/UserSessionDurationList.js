import React, { useState } from 'react';
import './UserSessionDuration.css';

const UserSessionDurationDashboard = () => {
  const [sessionData, setSessionData] = useState([
    { id: 1, username: 'anshu', login_time: '2025-04-01 09:00:00', logout_time: '2025-04-01 10:30:00', total_time_spent: '01:30:00' },
    { id: 2, username: 'jaiwin', login_time: '2025-04-01 09:15:00', logout_time: '2025-04-01 10:45:00', total_time_spent: '01:30:00' },
    { id: 3, username: 'admin', login_time: '2025-04-01 09:30:00', logout_time: '2025-04-01 11:00:00', total_time_spent: '01:30:00' },
    { id: 4, username: 'zara', login_time: '2025-04-02 08:45:00', logout_time: '2025-04-02 10:15:00', total_time_spent: '01:30:00' },
    { id: 5, username: 'omprakash', login_time: '2025-04-02 09:10:00', logout_time: '2025-04-02 10:55:00', total_time_spent: '01:45:00' },
    { id: 6, username: 'geetika', login_time: '2025-04-02 09:00:00', logout_time: '2025-04-02 10:00:00', total_time_spent: '01:00:00' },
    { id: 7, username: 'pranav', login_time: '2025-04-02 10:30:00', logout_time: '2025-04-02 11:45:00', total_time_spent: '01:15:00' },
    { id: 8, username: 'kritika', login_time: '2025-04-03 08:30:00', logout_time: '2025-04-03 09:45:00', total_time_spent: '01:15:00' },
    { id: 9, username: 'shrishti', login_time: '2025-04-03 11:00:00', logout_time: '2025-04-03 12:15:00', total_time_spent: '01:15:00' },
    { id: 10, username: 'yuvraj', login_time: '2025-04-03 10:00:00', logout_time: '2025-04-03 11:30:00', total_time_spent: '01:30:00' },
    { id: 11, username: 'tanvi', login_time: '2025-04-04 09:00:00', logout_time: '2025-04-04 10:30:00', total_time_spent: '01:30:00' },
    { id: 12, username: 'ritesh', login_time: '2025-04-04 10:15:00', logout_time: '2025-04-04 11:45:00', total_time_spent: '01:30:00' },
    { id: 13, username: 'sneha', login_time: '2025-04-04 11:00:00', logout_time: '2025-04-04 12:30:00', total_time_spent: '01:30:00' },
    { id: 14, username: 'meera', login_time: '2025-04-05 09:00:00', logout_time: '2025-04-05 10:30:00', total_time_spent: '01:30:00' },
    { id: 15, username: 'abhishek', login_time: '2025-04-05 09:45:00', logout_time: '2025-04-05 11:15:00', total_time_spent: '01:30:00' },
    { id: 16, username: 'ravi', login_time: '2025-04-05 10:30:00', logout_time: '2025-04-05 12:00:00', total_time_spent: '01:30:00' },
    { id: 17, username: 'rohit', login_time: '2025-04-06 09:00:00', logout_time: '2025-04-06 10:30:00', total_time_spent: '01:30:00' },
    { id: 18, username: 'nisha', login_time: '2025-04-06 09:15:00', logout_time: '2025-04-06 10:45:00', total_time_spent: '01:30:00' },
    { id: 19, username: 'neha', login_time: '2025-04-06 09:30:00', logout_time: '2025-04-06 11:00:00', total_time_spent: '01:30:00' },
    { id: 20, username: 'manish', login_time: '2025-04-06 10:00:00', logout_time: '2025-04-06 11:30:00', total_time_spent: '01:30:00' },
    { id: 21, username: 'rani', login_time: '2025-04-06 10:30:00', logout_time: '2025-04-06 12:00:00', total_time_spent: '01:30:00' },
    { id: 22, username: 'deepak', login_time: '2025-04-06 11:00:00', logout_time: '2025-04-06 12:30:00', total_time_spent: '01:30:00' },
    { id: 23, username: 'vishal', login_time: '2025-04-07 09:00:00', logout_time: '2025-04-07 10:30:00', total_time_spent: '01:30:00' },
    { id: 24, username: 'akshay', login_time: '2025-04-07 09:15:00', logout_time: '2025-04-07 10:45:00', total_time_spent: '01:30:00' },
    { id: 25, username: 'ravi', login_time: '2025-04-07 09:30:00', logout_time: '2025-04-07 11:00:00', total_time_spent: '01:30:00' },
    { id: 26, username: 'sasha', login_time: '2025-04-07 10:00:00', logout_time: '2025-04-07 11:30:00', total_time_spent: '01:30:00' },
    { id: 27, username: 'rishab', login_time: '2025-04-07 10:15:00', logout_time: '2025-04-07 11:45:00', total_time_spent: '01:30:00' },
    { id: 28, username: 'neelam', login_time: '2025-04-07 11:00:00', logout_time: '2025-04-07 12:30:00', total_time_spent: '01:30:00' },
    { id: 29, username: 'ravi', login_time: '2025-04-07 11:15:00', logout_time: '2025-04-07 12:45:00', total_time_spent: '01:30:00' },
    { id: 30, username: 'sonal', login_time: '2025-04-07 11:30:00', logout_time: '2025-04-07 01:00:00', total_time_spent: '01:30:00' },
    { id: 31, username: 'manoj', login_time: '2025-04-08 09:00:00', logout_time: '2025-04-08 10:30:00', total_time_spent: '01:30:00' },
    { id: 32, username: 'neelam', login_time: '2025-04-08 09:15:00', logout_time: '2025-04-08 10:45:00', total_time_spent: '01:30:00' },
  ]);

  return (
    <div className="user-session-duration-dashboard">
      <table className="session-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Login Time</th>
            <th>Logout Time</th>
            <th>Total Time Spent</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sessionData.map((session) => (
            <tr key={session.id}>
              <td>{session.id}</td>
              <td>{session.username}</td>
              <td>{session.login_time}</td>
              <td>{session.logout_time}</td>
              <td>{session.total_time_spent}</td>
              <td>
                <button>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserSessionDurationDashboard;
