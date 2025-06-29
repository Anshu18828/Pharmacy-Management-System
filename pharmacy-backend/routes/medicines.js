const express = require('express');
const router = express.Router();
const db = require('../db');  // Import the db connection

// Get all medicines
router.get('/', async (req, res) => {
  try {
    const [result] = await db.promise().query('SELECT * FROM medicines');
    res.json(result);  // Respond with the list of medicines
  } catch (err) {
    console.error('Error fetching medicines:', err.message);
    res.status(500).json({ error: 'Failed to fetch medicines. Please try again later.' });
  }
});

// Add a new medicine
router.post('/', async (req, res) => {
  const { name, brand, price, expiry_date, description } = req.body;
  const query = 'INSERT INTO medicines (name, brand, price, expiry_date, description) VALUES (?, ?, ?, ?, ?)';

  try {
    const [result] = await db.promise().query(query, [name, brand, price, expiry_date, description]);
    res.status(201).json({ id: result.insertId, ...req.body });  // Send the inserted data as response
  } catch (err) {
    console.error('Error adding medicine:', err.message);
    res.status(500).json({ error: 'Failed to add medicine. Please try again later.' });
  }
});

// Delete a medicine by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.promise().query('DELETE FROM medicines WHERE medicine_id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Medicine not found' });  // If no medicine found with the given ID
    }
    res.status(200).send('Medicine deleted successfully');
  } catch (err) {
    console.error('Error deleting medicine:', err.message);
    res.status(500).json({ error: 'Failed to delete medicine. Please try again later.' });
  }
});

module.exports = router;
