import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SessionDurationDashboard() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    axios.get('/api/session-duration').then(res => setSessions(res.data));
  }, []);

  return (
    <div>
      <h3>⏱ Session Duration Dashboard</h3>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Login Time</th>
            <th>Logout Time</th>
            <th>Total Duration</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map(s => (
            <tr key={s.id}>
              <td>{s.username}</td>
              <td>{new Date(s.login_time).toLocaleString()}</td>
              <td>{new Date(s.logout_time).toLocaleString()}</td>
              <td>{s.total_time_spent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SessionDurationDashboard;