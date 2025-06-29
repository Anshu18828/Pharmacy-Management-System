require('dotenv').config();
const mysql = require('mysql2');

// Optional: Validate env variables before creating connection
const requiredVars = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
const missing = requiredVars.filter(key => !process.env[key]);

if (missing.length > 0) {
  console.error(`❌ Missing required .env variables: ${missing.join(', ')}`);
  process.exit(1); // Exit app if required variables are missing
}

// Create a connection pool to manage concurrent database requests efficiently
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,  // Ensure connections are waiting for a free slot
  connectionLimit: 10,      // Set the maximum number of connections
  queueLimit: 0            // Unlimited queue length
});

// Wrap the pool query method to use promises (async/await)
const promisePool = pool.promise();

// Test connection to the database
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    console.log('🔎 Using config:', {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    process.exit(1); // Exit app if DB connection fails
  } else {
    console.log('✅ Connected to MySQL database');
    connection.release();  // Release the connection back to the pool
  }
});

// Export promisePool to use async/await in other parts of the application
module.exports = promisePool;
