const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../')));

// API trả về dữ liệu thống kê cho dashboard
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

// API trả về danh sách khách hàng (mẫu)
app.get('/api/customers', (req, res) => {
  res.json([
    { id: 1, name: "Nguyen Van A", gender: "male", status: "active" },
    { id: 2, name: "Tran Thi B", gender: "female", status: "inactive" }
  ]);
});

// API trả về thông tin hồ sơ người dùng
app.get('/api/profile', (req, res) => {
  res.json({
    username: "Leo",
    fullName: "Leo Nguyen",
    dob: "20/03/2004",
    address: "Quang Nam, Viet Nam",
    sex: "Male",
    email: "nguyenleoLeo2004@gmail.com",
    number: "012345678",
    occupation: "Streamer",
    avatar: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
  });
});

app.listen(PORT, () => {
  console.log(`Backend server is running at http://localhost:${PORT}`);
});
