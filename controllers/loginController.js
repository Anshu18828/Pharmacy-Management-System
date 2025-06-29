// controllers/loginController.js
const loginModel = require('../models/loginModel');

// Get all login records
exports.getLoginRecords = async (req, res) => {
  try {
    const loginRecords = await loginModel.getAllLoginRecords();
    res.json(loginRecords);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new login record
exports.addLoginRecord = async (req, res) => {
  const { user_id, login_date, login_time } = req.body;
  try {
    await loginModel.addLoginRecord(user_id, login_date, login_time);
    res.status(201).json({ message: 'Login record added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a login record by ID
exports.deleteLoginRecord = async (req, res) => {
  const { id } = req.params;
  try {
    await loginModel.deleteLoginRecord(id);
    res.status(200).json({ message: 'Login record deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
