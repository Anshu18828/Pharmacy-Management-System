// controllers/sessionController.js
const sessionModel = require('../models/sessionModel');

// Get all session duration records
exports.getSessionDurations = async (req, res) => {
  try {
    const sessionDurations = await sessionModel.getAllSessionDurations();
    res.json(sessionDurations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new session duration record
exports.addSessionDuration = async (req, res) => {
  const { user_id, login_time, logout_time, total_time_spent } = req.body;
  try {
    await sessionModel.addSessionDuration(user_id, login_time, logout_time, total_time_spent);
    res.status(201).json({ message: 'Session duration added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a session duration by ID
exports.deleteSessionDuration = async (req, res) => {
  const { id } = req.params;
  try {
    await sessionModel.deleteSessionDuration(id);
    res.status(200).json({ message: 'Session duration deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
