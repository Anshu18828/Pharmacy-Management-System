// routes/salesRoutes.js
const express = require('express');
const salesController = require('../controllers/salesController');
const router = express.Router();

// Get all sales records
router.get('/sales', salesController.getSales);

// Add a new sale record
router.post('/sales', salesController.addSale);

// Delete a sale by ID
router.delete('/sales/:id', salesController.deleteSale);

module.exports = router;
