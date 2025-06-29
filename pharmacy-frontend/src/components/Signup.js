import React, { useState } from 'react';
import '../App.css';


function Signup({ onSuccess }) {
  const [form, setForm] = useState({ username: '', password: '', confirmPassword: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!form.username || !form.password) {
      alert('All fields are required');
      return;
    }
    onSuccess();
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;