// models/salesModel.js
const db = require('../db');

// Get all sales records
exports.getAllSales = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM sales', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Add a new sale record
exports.addSale = (medicine_id, quantity_sold, sale_date, user_id) => {
  return new Promise((resolve, reject) => {
    const query =
      'INSERT INTO sales (medicine_id, quantity_sold, sale_date, user_id) VALUES (?, ?, ?, ?)';
    db.query(query, [medicine_id, quantity_sold, sale_date, user_id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Delete a sale by ID
exports.deleteSale = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM sales WHERE sale_id = ?', [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
