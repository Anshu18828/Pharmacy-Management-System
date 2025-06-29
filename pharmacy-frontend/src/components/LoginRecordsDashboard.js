import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LoginRecordsDashboard() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('/api/login-records').then(res => setRecords(res.data));
  }, []);

  return (
    <div>
      <h3>👤 User Login Records</h3>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Login Date</th>
            <th>Login Time</th>
          </tr>
        </thead>
        <tbody>
          {records.map(r => (
            <tr key={r.id}>
              <td>{r.username}</td>
              <td>{r.login_date}</td>
              <td>{r.login_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoginRecordsDashboard;
