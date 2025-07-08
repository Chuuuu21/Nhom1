const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../')));

app.get('/api/statistics', (req, res) => {
  res.json({
    connections: 20,
    firstTimeVisitors: 6,
    returningCustomers: 6,
    returningCustomersIncrease: 2,
    status: { inactive: 5, activities: 15 },
    gender: { unknown: 50, female: 30, male: 20 },
    frequency: { April: 10, May: 20, June: 18, July: 24 }
  });
});

app.get('/api/customers', (req, res) => {
  res.json([
    { id: 1, name: "Nguyen Van A", gender: "male", status: "active" },
    { id: 2, name: "Tran Thi B", gender: "female", status: "inactive" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend server is running at http://localhost:${PORT}`);
});
