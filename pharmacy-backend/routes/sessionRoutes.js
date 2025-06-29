// routes/sessionRoutes.js
const express = require('express');
const sessionController = require('../controllers/sessionController');
const router = express.Router();

// Get all session duration records
router.get('/session-duration', sessionController.getSessionDurations);

// Add a new session duration record
router.post('/session-duration', sessionController.addSessionDuration);

// Delete a session duration record by ID
router.delete('/session-duration/:id', sessionController.deleteSessionDuration);

module.exports = router;
