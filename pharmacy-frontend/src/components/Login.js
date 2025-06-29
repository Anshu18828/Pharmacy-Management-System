import React, { useState } from 'react';
import '../App.css';

function Login({ onSuccess }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [forgotClicked, setForgotClicked] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      onSuccess();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>

      <p className="forgot" onClick={() => setForgotClicked(true)}>Forgot Password?</p>
      {forgotClicked && (
        <p className="reset-msg">🔐 If this email exists, a reset link has been sent.</p>
      )}
    </div>
  );
}

export default Login;