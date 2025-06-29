// controllers/salesController.js
const salesModel = require('../models/salesModel');

// Get all sales records
exports.getSales = async (req, res) => {
  try {
    const sales = await salesModel.getAllSales();
    res.json(sales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new sale record
exports.addSale = async (req, res) => {
  const { medicine_id, quantity_sold, sale_date, user_id } = req.body;
  try {
    await salesModel.addSale(medicine_id, quantity_sold, sale_date, user_id);
    res.status(201).json({ message: 'Sale added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a sale by ID
exports.deleteSale = async (req, res) => {
  const { id } = req.params;
  try {
    await salesModel.deleteSale(id);
    res.status(200).json({ message: 'Sale deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
