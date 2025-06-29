const mysql = require('mysql2');

// Set up the database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'pharmacy_db'
});

// Function to handle adding medicine within a transaction
function executeAddMedicineTransaction(name, quantity, price) {
  return new Promise((resolve, reject) => {
    db.beginTransaction((err) => {
      if (err) {
        reject('Error starting transaction');
        return;
      }

      const addMedicineQuery = 'INSERT INTO medicines (name, quantity, price) VALUES (?, ?, ?)';
      db.query(addMedicineQuery, [name, quantity, price], (err, results) => {
        if (err) {
          db.rollback(() => {
            reject('Error adding medicine');
            db.end();
          });
          return;
        }

        db.commit((err) => {
          if (err) {
            db.rollback(() => {
              reject('Error committing transaction');
              db.end();
            });
            return;
          }

          resolve('Medicine added successfully');
          db.end();
        });
      });
    });
  });
}

// Function to handle deleting medicine within a transaction
function executeDeleteMedicineTransaction(id) {
  return new Promise((resolve, reject) => {
    db.beginTransaction((err) => {
      if (err) {
        reject('Error starting transaction');
        return;
      }

      const deleteMedicineQuery = 'DELETE FROM medicines WHERE id = ?';
      db.query(deleteMedicineQuery, [id], (err, results) => {
        if (err) {
          db.rollback(() => {
            reject('Error deleting medicine');
            db.end();
          });
          return;
        }

        db.commit((err) => {
          if (err) {
            db.rollback(() => {
              reject('Error committing transaction');
              db.end();
            });
            return;
          }

          resolve('Medicine deleted successfully');
          db.end();
        });
      });
    });
  });
}

module.exports = {
  executeAddMedicineTransaction,
  executeDeleteMedicineTransaction
};
