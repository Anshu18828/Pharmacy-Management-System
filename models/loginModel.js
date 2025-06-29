// models/loginModel.js
const db = require('../db');

// Get all login records
exports.getAllLoginRecords = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM user_login_records', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Add a new login record
exports.addLoginRecord = (user_id, login_date, login_time) => {
  return new Promise((resolve, reject) => {
    const query =
      'INSERT INTO user_login_records (user_id, login_date, login_time) VALUES (?, ?, ?)';
    db.query(query, [user_id, login_date, login_time], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Delete a login record by ID
exports.deleteLoginRecord = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM user_login_records WHERE login_record_id = ?', [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
