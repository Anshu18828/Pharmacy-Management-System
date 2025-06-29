// models/sessionModel.js
const db = require('../db');

// Get all session duration records
exports.getAllSessionDurations = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM user_session_duration', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Add a new session duration record
exports.addSessionDuration = (user_id, login_time, logout_time, total_time_spent) => {
  return new Promise((resolve, reject) => {
    const query =
      'INSERT INTO user_session_duration (user_id, login_time, logout_time, total_time_spent) VALUES (?, ?, ?, ?)';
    db.query(query, [user_id, login_time, logout_time, total_time_spent], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Delete a session duration by ID
exports.deleteSessionDuration = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM user_session_duration WHERE session_id = ?', [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
