import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SalesList.css';

function SalesList() {
  const [sales, setSales] = useState([]);
  const [newSale, setNewSale] = useState({
    medicine_id: '',
    quantity_sold: '',
    sale_date: '',
    user_id: ''
  });

  // All 32 sales data (hardcoded for demonstration)
  const sampleSales = [
    { id: 1, medicine_id: 1, quantity_sold: 10, sale_date: "2023-01-01T10:00", user_id: 1 },
    { id: 2, medicine_id: 2, quantity_sold: 20, sale_date: "2023-01-02T11:00", user_id: 2 },
    { id: 3, medicine_id: 3, quantity_sold: 15, sale_date: "2023-01-03T12:00", user_id: 3 },
    { id: 4, medicine_id: 4, quantity_sold: 25, sale_date: "2023-01-04T13:00", user_id: 4 },
    { id: 5, medicine_id: 5, quantity_sold: 10, sale_date: "2023-01-05T14:00", user_id: 5 },
    { id: 6, medicine_id: 6, quantity_sold: 30, sale_date: "2023-01-06T15:00", user_id: 6 },
    { id: 7, medicine_id: 7, quantity_sold: 5, sale_date: "2023-01-07T16:00", user_id: 7 },
    { id: 8, medicine_id: 8, quantity_sold: 40, sale_date: "2023-01-08T17:00", user_id: 8 },
    { id: 9, medicine_id: 9, quantity_sold: 25, sale_date: "2023-01-09T18:00", user_id: 9 },
    { id: 10, medicine_id: 10, quantity_sold: 30, sale_date: "2023-01-10T19:00", user_id: 10 },
    { id: 11, medicine_id: 11, quantity_sold: 35, sale_date: "2023-01-11T20:00", user_id: 11 },
    { id: 12, medicine_id: 12, quantity_sold: 40, sale_date: "2023-01-12T21:00", user_id: 12 },
    { id: 13, medicine_id: 13, quantity_sold: 5, sale_date: "2023-01-13T22:00", user_id: 13 },
    { id: 14, medicine_id: 14, quantity_sold: 20, sale_date: "2023-01-14T23:00", user_id: 14 },
    { id: 15, medicine_id: 15, quantity_sold: 15, sale_date: "2023-01-15T10:30", user_id: 15 },
    { id: 16, medicine_id: 16, quantity_sold: 50, sale_date: "2023-01-16T11:30", user_id: 16 },
    { id: 17, medicine_id: 17, quantity_sold: 10, sale_date: "2023-01-17T12:30", user_id: 17 },
    { id: 18, medicine_id: 18, quantity_sold: 30, sale_date: "2023-01-18T13:30", user_id: 18 },
    { id: 19, medicine_id: 19, quantity_sold: 25, sale_date: "2023-01-19T14:30", user_id: 19 },
    { id: 20, medicine_id: 20, quantity_sold: 10, sale_date: "2023-01-20T15:30", user_id: 20 },
    { id: 21, medicine_id: 21, quantity_sold: 10, sale_date: "2023-01-21T16:30", user_id: 21 },
    { id: 22, medicine_id: 22, quantity_sold: 20, sale_date: "2023-01-22T17:30", user_id: 22 },
    { id: 23, medicine_id: 23, quantity_sold: 30, sale_date: "2023-01-23T18:30", user_id: 23 },
    { id: 24, medicine_id: 24, quantity_sold: 5, sale_date: "2023-01-24T19:30", user_id: 24 },
    { id: 25, medicine_id: 25, quantity_sold: 10, sale_date: "2023-01-25T20:30", user_id: 25 },
    { id: 26, medicine_id: 26, quantity_sold: 50, sale_date: "2023-01-26T21:30", user_id: 26 },
    { id: 27, medicine_id: 27, quantity_sold: 30, sale_date: "2023-01-27T22:30", user_id: 27 },
    { id: 28, medicine_id: 28, quantity_sold: 40, sale_date: "2023-01-28T23:30", user_id: 28 },
    { id: 29, medicine_id: 29, quantity_sold: 25, sale_date: "2023-01-29T10:00", user_id: 29 },
    { id: 30, medicine_id: 30, quantity_sold: 35, sale_date: "2023-01-30T11:00", user_id: 30 },
    { id: 31, medicine_id: 31, quantity_sold: 50, sale_date: "2023-01-31T12:00", user_id: 31 },
    { id: 32, medicine_id: 32, quantity_sold: 15, sale_date: "2023-02-01T13:00", user_id: 32 }
  ];

  // Use the sample data to populate sales list
  useEffect(() => {
    setSales(sampleSales);
  }, []);

  // Add a new sale
  const handleAddSale = () => {
    if (!newSale.medicine_id || !newSale.quantity_sold || !newSale.sale_date || !newSale.user_id) {
      alert('Please fill all fields');
      return;
    }
    
    axios.post('http://localhost:3003/api/sales', newSale)
      .then(res => {
        setSales([...sales, res.data]);  // Add the new sale to the sales list
        setNewSale({ medicine_id: '', quantity_sold: '', sale_date: '', user_id: '' });  // Clear form
      })
      .catch(err => console.error('Error adding sale:', err));
  };

  // Remove a sale by ID
  const handleRemoveSale = (id) => {
    if (window.confirm('Are you sure you want to delete this sale?')) {
      axios.delete(`http://localhost:3003/api/sales/${id}`)
        .then(() => {
          setSales(sales.filter(sale => sale.id !== id));  // Remove the sale from the list
        })
        .catch(err => console.error('Error deleting sale:', err));
    }
  };

  // Handle input changes for adding a new sale
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSale({ ...newSale, [name]: value });
  };

  return (
    <div className="med-container">
      <h2>📦 Sales Dashboard</h2>

      <div className="top-controls">
        <input
          type="number"
          name="medicine_id"
          placeholder="Medicine ID"
          value={newSale.medicine_id}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity_sold"
          placeholder="Quantity Sold"
          value={newSale.quantity_sold}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="sale_date"
          value={newSale.sale_date}
          onChange={handleChange}
        />
        <input
          type="number"
          name="user_id"
          placeholder="User ID"
          value={newSale.user_id}
          onChange={handleChange}
        />
        <button className="add-btn" onClick={handleAddSale}>➕ Add Sale</button>
      </div>

      <table className="med-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Medicine ID</th>
            <th>Quantity Sold</th>
            <th>Sale Date</th>
            <th>User ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.medicine_id}</td>
              <td>{sale.quantity_sold}</td>
              <td>{sale.sale_date}</td>
              <td>{sale.user_id}</td>
              <td>
                <button onClick={() => handleRemoveSale(sale.id)}>❌ Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesList;
