import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MedicineList.css';

function MedicineList() {
  const [medicines, setMedicines] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: '',
    expiry_date: '',
    soldTo: ''
  });
  const [searchTerm, setSearchTerm] = useState('');

  // All 32 medicines data (hardcoded for demonstration)
  const initialMedicines = [
    { id: 1, name: "Paracetamol", price: 25.50, quantity: 100, expiry_date: "2026-12-31", soldTo: 'Pharmacy A' },
    { id: 2, name: "Flexon MR", price: 35.00, quantity: 80, expiry_date: "2025-10-01", soldTo: 'Pharmacy B' },
    { id: 3, name: "Amoxicillin", price: 60.00, quantity: 90, expiry_date: "2027-08-20", soldTo: 'Pharmacy C' },
    { id: 4, name: "Azithromycin", price: 120.00, quantity: 60, expiry_date: "2026-07-01", soldTo: 'Pharmacy D' },
    { id: 5, name: "Ibuprofen", price: 40.75, quantity: 50, expiry_date: "2025-10-15", soldTo: 'Pharmacy E' },
    { id: 6, name: "Cetrizine", price: 12.00, quantity: 120, expiry_date: "2027-01-01", soldTo: 'Pharmacy F' },
    { id: 7, name: "Dolo 650", price: 15.00, quantity: 200, expiry_date: "2026-09-10", soldTo: 'Pharmacy G' },
    { id: 8, name: "Combiflam", price: 18.00, quantity: 150, expiry_date: "2026-08-01", soldTo: 'Pharmacy H' },
    { id: 9, name: "Metformin", price: 30.00, quantity: 100, expiry_date: "2027-03-20", soldTo: 'Pharmacy I' },
    { id: 10, name: "Cetirizine", price: 10.00, quantity: 110, expiry_date: "2026-10-10", soldTo: 'Pharmacy J' },
    { id: 11, name: "Ranitidine", price: 12.50, quantity: 70, expiry_date: "2026-11-11", soldTo: 'Pharmacy K' },
    { id: 12, name: "Pantoprazole", price: 18.75, quantity: 95, expiry_date: "2027-01-25", soldTo: 'Pharmacy L' },
    { id: 13, name: "Zincovit", price: 22.00, quantity: 130, expiry_date: "2026-12-15", soldTo: 'Pharmacy M' },
    { id: 14, name: "Montelukast", price: 35.00, quantity: 80, expiry_date: "2026-07-05", soldTo: 'Pharmacy N' },
    { id: 15, name: "Aspirin", price: 14.00, quantity: 95, expiry_date: "2026-08-15", soldTo: 'Pharmacy O' },
    { id: 16, name: "Losartan", price: 16.00, quantity: 100, expiry_date: "2027-05-10", soldTo: 'Pharmacy P' },
    { id: 17, name: "Enthral-D", price: 20.00, quantity: 70, expiry_date: "2026-10-30", soldTo: 'Pharmacy Q' },
    { id: 18, name: "Omeprazole", price: 25.00, quantity: 80, expiry_date: "2026-12-05", soldTo: 'Pharmacy R' },
    { id: 19, name: "Allegra", price: 30.00, quantity: 85, expiry_date: "2027-06-01", soldTo: 'Pharmacy S' },
    { id: 20, name: "Vicks", price: 10.00, quantity: 200, expiry_date: "2026-12-10", soldTo: 'Pharmacy T' },
    { id: 21, name: "ORS Sachets", price: 8.00, quantity: 250, expiry_date: "2027-01-01", soldTo: 'Pharmacy U' },
    { id: 22, name: "Calpol", price: 20.00, quantity: 180, expiry_date: "2026-11-20", soldTo: 'Pharmacy V' },
    { id: 23, name: "Saridon", price: 11.50, quantity: 70, expiry_date: "2026-08-18", soldTo: 'Pharmacy W' },
    { id: 24, name: "Erythromycin", price: 13.50, quantity: 65, expiry_date: "2026-10-30", soldTo: 'Pharmacy X' },
    { id: 25, name: "Telmisartan", price: 18.00, quantity: 60, expiry_date: "2026-11-05", soldTo: 'Pharmacy Y' },
    { id: 26, name: "Rabeprazole", price: 16.50, quantity: 80, expiry_date: "2027-02-15", soldTo: 'Pharmacy Z' },
    { id: 27, name: "Liv 52", price: 12.00, quantity: 140, expiry_date: "2027-04-10", soldTo: 'Pharmacy A' },
    { id: 28, name: "Loperamide", price: 10.50, quantity: 95, expiry_date: "2026-09-20", soldTo: 'Pharmacy B' },
    { id: 29, name: "Norflox TZ", price: 13.75, quantity: 85, expiry_date: "2026-07-30", soldTo: 'Pharmacy C' },
    { id: 30, name: "Betadine", price: 9.00, quantity: 60, expiry_date: "2026-12-01", soldTo: 'Pharmacy D' },
    { id: 31, name: "Isabgol", price: 15.50, quantity: 100, expiry_date: "2027-03-15", soldTo: 'Pharmacy E' },
    { id: 32, name: "Glucon-D", price: 14.00, quantity: 110, expiry_date: "2027-05-01", soldTo: 'Pharmacy F' }
  ];

  // Fetch medicines from the backend API on component mount
  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const response = await axios.get('http://localhost:3003/api/medicines'); // Adjust to your API endpoint
      setMedicines(response.data); // Set fetched medicines data to state
    } catch (error) {
      console.error('Error fetching medicines:', error);
      // Set the initial data if fetching fails
      setMedicines(initialMedicines);
    }
  };

  // handleAdd function for adding new medicine
const handleAdd = async () => {
  const { name, price, quantity, expiry_date, soldTo } = formData;

  // Validate form data - ensure all fields are filled
  if (!name || !price || !quantity || !expiry_date || !soldTo) {
    alert('Please fill in all fields');
    return;
  }

  try {
    // Send data to the backend to add it to the database
    const response = await axios.post('http://localhost:3003/api/medicines', formData);

    // On success, add the new medicine to the front-end list (and reset the form)
    setMedicines([...medicines, response.data]);
    setFormData({ name: '', price: '', quantity: '', expiry_date: '', soldTo: '' });
  } catch (err) {
    console.error('Error adding medicine:', err);
  }
};

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    try {
      // Make API request to delete the medicine by ID
      await axios.delete(`http://localhost:3003/api/medicines/${id}`);
      
      // After deletion, fetch the updated list of medicines
      fetchMedicines();
    } catch (err) {
      console.error('Error deleting:', err);
    }
  };

  const filteredData = medicines.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="medicine-dashboard">
      <div className="dashboard-header">
        <h2>💊 Medicine Purchase Dashboard</h2>
      </div>

      <div className="top-controls">
        <input type="text" placeholder="Medicine" value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="number" placeholder="Price" value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
        <input type="number" placeholder="Quantity" value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} />
        <input type="date" value={formData.expiry_date}
          onChange={(e) => setFormData({ ...formData, expiry_date: e.target.value })} />
        <input type="text" placeholder="Sold To" value={formData.soldTo}
          onChange={(e) => setFormData({ ...formData, soldTo: e.target.value })} />
        
        <button className="add-btn" onClick={handleAdd}>➕ Add</button>
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="purchase-dashboard">
        <table className="med-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Medicine</th>
              <th>Price (₹)</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
              <th>Sold To</th>
              <th>❌</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.expiry_date}</td>
                <td>{item.soldTo}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MedicineList;
