const pool = require('../db');  // Import the pool from db.js

// Get all medicines
exports.getAllMedicines = async (req, res) => {
  try {
    const [results] = await pool.promise().query('SELECT * FROM medicines_purchase');
    res.json(results);  // Send the data as JSON
  } catch (err) {
    console.error('Error fetching medicines:', err.message);
    res.status(500).json({ error: 'Failed to retrieve medicines. Please try again later.' });
  }
};

// Add a new medicine
exports.addMedicine = async (req, res) => {
  const { name, price, quantity, expiry_date, soldTo } = req.body;

  // Validate input fields
  if (!name || !price || !quantity || !expiry_date || !soldTo) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Validate quantity and price to ensure they are numbers
  if (isNaN(price) || isNaN(quantity)) {
    return res.status(400).json({ error: 'Price and Quantity must be valid numbers.' });
  }

  try {
    // Insert medicine data into the 'medicines_purchase' table
    const [result] = await pool.promise().query(
      'INSERT INTO medicines_purchase (name, price, quantity, expiry_date, soldTo) VALUES (?, ?, ?, ?, ?)',
      [name, price, quantity, expiry_date, soldTo]
    );
    res.status(201).json({ message: 'Medicine added successfully!', id: result.insertId });
  } catch (err) {
    console.error('Error adding medicine:', err.message);
    res.status(500).json({ error: 'Failed to add medicine. Please try again later.' });
  }
};

// Delete a medicine by ID
exports.deleteMedicine = async (req, res) => {
  const { id } = req.params;

  // Validate ID to ensure it's a number
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid medicine ID.' });
  }

  try {
    // Delete medicine from 'medicines_purchase' table by id
    const [result] = await pool.promise().query('DELETE FROM medicines_purchase WHERE id = ?', [id]);

    // If no rows were affected, it means the ID does not exist in the database
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Medicine not found' });
    }

    res.status(200).json({ message: 'Medicine deleted successfully!' });
  } catch (err) {
    console.error('Error deleting medicine:', err.message);
    res.status(500).json({ error: 'Failed to delete medicine. Please try again later.' });
  }
};
