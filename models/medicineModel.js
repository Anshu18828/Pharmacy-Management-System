const db = require('../db'); // Import the promisePool from db.js

// Get all medicines using promisePool for async/await
exports.getAllMedicines = async () => {
  try {
    const [results] = await db.query('SELECT * FROM medicines_purchase'); // Ensure correct table name
    return results;
  } catch (err) {
    throw new Error('Error fetching medicines: ' + err.message);
  }
};

// Add a new medicine using promisePool for async/await
exports.addMedicine = async (name, price, quantity, expiry_date, soldTo) => {
  try {
    // Insert new medicine into the medicines_purchase table
    const query = 'INSERT INTO medicines_purchase (name, price, quantity, expiry_date, soldTo) VALUES (?, ?, ?, ?, ?)';
    const [result] = await db.query(query, [name, price, quantity, expiry_date, soldTo]);
    return result; // Return the result of the insertion
  } catch (err) {
    throw new Error('Error adding medicine: ' + err.message); // Handle errors properly
  }
};

