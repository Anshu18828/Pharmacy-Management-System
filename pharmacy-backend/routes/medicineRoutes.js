const express = require('express');
const router = express.Router();
const medicineController = require('../controllers/medicineController');
const transactionController = require('../controllers/transactionController');

// GET all medicines
router.get('/', medicineController.getAllMedicines);

// POST a new medicine with transaction logic
router.post('/', async (req, res) => {
  const { name, price, quantity, expiry_date, soldTo } = req.body;

  // Validate required fields before proceeding with the transaction
  if (!name || !price || !quantity || !expiry_date || !soldTo) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Execute transaction logic to add a new medicine
    await transactionController.executeAddMedicineTransaction(name, price, quantity, expiry_date, soldTo);
    res.status(201).json({ message: 'Medicine added successfully!' });
  } catch (err) {
    console.error('Error adding medicine:', err.message);
    res.status(500).json({ error: 'Error adding medicine. Please try again later.' });
  }
});

// DELETE a medicine by ID with transaction logic
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  // Validate ID before proceeding with the deletion
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid medicine ID.' });
  }

  try {
    // Execute transaction logic to delete a medicine by ID
    await transactionController.executeDeleteMedicineTransaction(id);
    res.status(200).json({ message: 'Medicine deleted successfully!' });
  } catch (err) {
    console.error('Error deleting medicine:', err.message);
    res.status(500).json({ error: 'Error deleting medicine. Please try again later.' });
  }
});

module.exports = router;
