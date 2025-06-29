import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Medicines() {
  const [medicines, setMedicines] = useState([]);
  const [newMedicine, setNewMedicine] = useState('');

  // Fetch data on mount
  useEffect(() => {
    axios.get('http://localhost:5000/medicines')
      .then((res) => setMedicines(res.data))
      .catch((err) => console.error('Error fetching medicines:', err));
  }, []);

  // Add new medicine
  const handleAdd = () => {
    if (!newMedicine.trim()) return; // prevent empty names

    const newMed = { name: newMedicine };
    axios.post('http://localhost:5000/medicines', newMed)
      .then((res) => {
        setMedicines([...medicines, res.data]);
        setNewMedicine('');
      })
      .catch((err) => console.error('Error adding medicine:', err));
  };

  // Delete medicine
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/medicines/${id}`)
      .then(() => {
        setMedicines((prev) => prev.filter((med) => med.id !== id));
      })
      .catch((err) => console.error('Error deleting medicine:', err));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Medicines</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={newMedicine}
          onChange={(e) => setNewMedicine(e.target.value)}
          placeholder="Enter medicine name"
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button onClick={handleAdd} style={{ padding: '0.5rem' }}>
          Add
        </button>
      </div>

      {medicines.length === 0 ? (
        <p>No medicines available.</p>
      ) : (
        <ul>
          {medicines.map((med) => (
            <li key={med.id} style={{ marginBottom: '0.5rem' }}>
              {med.name}
              <button
                onClick={() => handleDelete(med.id)}
                style={{
                  marginLeft: '1rem',
                  padding: '0.3rem 0.6rem',
                  background: 'red',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '4px',
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Medicines;
