require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3003;
const medicineRoutes = require('./routes/medicines');  // Import the medicine routes

// Middleware
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(express.json());  // Parse incoming JSON requests

// Routes
app.use('/api/medicines', medicineRoutes);  // Use the medicine routes for API requests

// Health check route
app.get('/', (req, res) => {
  res.send('💊 Pharmacy Backend API is running');
});

// Start server
app.listen(PORT, () => {
  const now = new Date().toLocaleString();
  console.log(`🚀 Server running at http://localhost:${PORT} — ${now}`);
});

// Global error handler (optional)
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Optionally you can log to a file or external service here
  process.exit(1); // Exit app after uncaught exception to avoid potential corruption
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Optionally log to a file or external service here
  process.exit(1); // Exit app to ensure consistent state
});
