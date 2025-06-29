// routes/loginRoutes.js
const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();

// Get all login records
router.get('/login-records', loginController.getLoginRecords);

// Add a new login record
router.post('/login-records', loginController.addLoginRecord);

// Delete a login record by ID
router.delete('/login-records/:id', loginController.deleteLoginRecord);

module.exports = router;
