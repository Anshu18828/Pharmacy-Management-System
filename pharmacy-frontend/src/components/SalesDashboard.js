import React, { useState } from 'react';
import './SalesDashboard.css';

const SalesDashboard = () => {
  const [salesData, setSalesData] = useState([
    { id: 1, medicine_id: 1, medicine_name: "Paracetamol", price: 25.50, quantity_sold: 30, sale_date: '2025-04-01 09:10:00', user_id: 1 },
    { id: 2, medicine_id: 2, medicine_name: "Flexon MR", price: 35.00, quantity_sold: 20, sale_date: '2025-04-02 09:20:00', user_id: 2 },
    { id: 3, medicine_id: 3, medicine_name: "Amoxicillin", price: 60.00, quantity_sold: 20, sale_date: '2025-03-31 09:30:00', user_id: 3 },
    { id: 4, medicine_id: 4, medicine_name: "Azithromycin", price: 120.00, quantity_sold: 10, sale_date: '2025-03-28 09:40:00', user_id: 4 },
    { id: 5, medicine_id: 5, medicine_name: "Ibuprofen", price: 40.75, quantity_sold: 15, sale_date: '2025-03-31 09:50:00', user_id: 5 },
    { id: 6, medicine_id: 6, medicine_name: "Cetrizine", price: 12.00, quantity_sold: 25, sale_date: '2025-03-30 10:00:00', user_id: 6 },
    { id: 7, medicine_id: 7, medicine_name: "Dolo 650", price: 15.00, quantity_sold: 18, sale_date: '2025-04-01 10:10:00', user_id: 7 },
    { id: 8, medicine_id: 8, medicine_name: "Combiflam", price: 18.00, quantity_sold: 22, sale_date: '2025-03-31 10:20:00', user_id: 8 },
    { id: 9, medicine_id: 9, medicine_name: "Metformin", price: 30.00, quantity_sold: 12, sale_date: '2025-04-01 10:30:00', user_id: 9 },
    { id: 10, medicine_id: 10, medicine_name: "Cetirizine", price: 10.00, quantity_sold: 28, sale_date: '2025-04-01 10:40:00', user_id: 10 },
    { id: 11, medicine_id: 11, medicine_name: "Ranitidine", price: 12.50, quantity_sold: 14, sale_date: '2025-03-29 10:50:00', user_id: 11 },
    { id: 12, medicine_id: 12, medicine_name: "Pantoprazole", price: 18.75, quantity_sold: 16, sale_date: '2025-03-30 11:00:00', user_id: 12 },
    { id: 13, medicine_id: 13, medicine_name: "Zincovit", price: 22.00, quantity_sold: 20, sale_date: '2025-04-01 11:10:00', user_id: 13 },
    { id: 14, medicine_id: 14, medicine_name: "Montelukast", price: 35.00, quantity_sold: 23, sale_date: '2025-03-30 11:20:00', user_id: 14 },
    { id: 15, medicine_id: 15, medicine_name: "Aspirin", price: 14.00, quantity_sold: 11, sale_date: '2025-03-31 11:30:00', user_id: 15 },
    { id: 16, medicine_id: 16, medicine_name: "Losartan", price: 16.00, quantity_sold: 17, sale_date: '2025-04-01 11:40:00', user_id: 16 },
    { id: 17, medicine_id: 17, medicine_name: "Enthral-D", price: 20.00, quantity_sold: 25, sale_date: '2025-03-31 11:50:00', user_id: 17 },
    { id: 18, medicine_id: 18, medicine_name: "Omeprazole", price: 25.00, quantity_sold: 30, sale_date: '2025-04-02 12:00:00', user_id: 18 },
    { id: 19, medicine_id: 19, medicine_name: "Allegra", price: 30.00, quantity_sold: 24, sale_date: '2025-04-02 12:10:00', user_id: 19 },
    { id: 20, medicine_id: 20, medicine_name: "Vicks", price: 10.00, quantity_sold: 35, sale_date: '2025-04-02 12:20:00', user_id: 20 },
    { id: 21, medicine_id: 21, medicine_name: "ORS Sachets", price: 8.00, quantity_sold: 30, sale_date: '2025-04-02 12:30:00', user_id: 21 },
    { id: 22, medicine_id: 22, medicine_name: "Calpol", price: 20.00, quantity_sold: 20, sale_date: '2025-04-03 13:00:00', user_id: 22 },
    { id: 23, medicine_id: 23, medicine_name: "Saridon", price: 11.50, quantity_sold: 10, sale_date: '2025-04-03 13:10:00', user_id: 23 },
    { id: 24, medicine_id: 24, medicine_name: "Erythromycin", price: 13.50, quantity_sold: 17, sale_date: '2025-04-03 13:20:00', user_id: 24 },
    { id: 25, medicine_id: 25, medicine_name: "Telmisartan", price: 18.00, quantity_sold: 20, sale_date: '2025-04-03 13:30:00', user_id: 25 },
    { id: 26, medicine_id: 26, medicine_name: "Rabeprazole", price: 16.50, quantity_sold: 18, sale_date: '2025-04-04 14:00:00', user_id: 26 },
    { id: 27, medicine_id: 27, medicine_name: "Liv 52", price: 12.00, quantity_sold: 22, sale_date: '2025-04-04 14:10:00', user_id: 27 },
    { id: 28, medicine_id: 28, medicine_name: "Loperamide", price: 10.50, quantity_sold: 14, sale_date: '2025-04-04 14:20:00', user_id: 28 },
    { id: 29, medicine_id: 29, medicine_name: "Norflox TZ", price: 13.75, quantity_sold: 23, sale_date: '2025-04-04 14:30:00', user_id: 29 },
    { id: 30, medicine_id: 30, medicine_name: "Betadine", price: 9.00, quantity_sold: 20, sale_date: '2025-04-04 14:40:00', user_id: 30 },
    { id: 31, medicine_id: 31, medicine_name: "Isabgol", price: 15.50, quantity_sold: 15, sale_date: '2025-04-05 15:00:00', user_id: 31 },
    { id: 32, medicine_id: 32, medicine_name: "Glucon-D", price: 14.00, quantity_sold: 19, sale_date: '2025-04-05 15:10:00', user_id: 32 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleAdd = () => {
    const newSale = {
      id: salesData.length + 1, // Increment ID
      medicine_id: 1, // Example medicine ID
      quantity_sold: 1, // Example quantity
      sale_date: new Date().toISOString().split('T')[0] + ' ' + new Date().toISOString().split('T')[1].split('.')[0], // Current sale time
      user_id: 1, // Example user ID
    };
    setSalesData([...salesData, newSale]);
  };

  const handleRemove = (id) => {
    const updatedData = salesData.filter((sale) => sale.id !== id);
    setSalesData(updatedData);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSalesData = salesData.filter((sale) => {
    return (
      sale.medicine_id.toString().includes(searchTerm) ||
      sale.quantity_sold.toString().includes(searchTerm) ||
      sale.sale_date.includes(searchTerm) ||
      sale.user_id.toString().includes(searchTerm)
    );
  });

  return (
    <div className="sales-dashboard">
      <div className="top-controls">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="add-btn" onClick={handleAdd}>➕ Add Sale</button>
      </div>

      <table className="sales-table">
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
          {filteredSalesData.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.medicine_id}</td>
              <td>{sale.quantity_sold}</td>
              <td>{sale.sale_date}</td>
              <td>{sale.user_id}</td>
              <td>
                <button onClick={() => handleRemove(sale.id)}>❌ Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesDashboard;
