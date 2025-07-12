const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require("../routes/route");

const app = express();
const PORT = 4545;

app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/TRANGCHU', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log(' Kết nối MongoDB thành công');
}).catch(err => {
  console.error(' Kết nối MongoDB thất bại:', err);
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public'))); // 👈 fix the path

app.use(express.static(path.join(__dirname, '../front-end')));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../front-end/home.html');
   console.log("📄 Đường dẫn home.html:", filePath);
  res.sendFile(filePath);
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/signup.html'));
});

app.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/signin.html'));
});

app.get('/connect', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/connectnow.html'));
});

app.get('/therapist', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/therapist.html'));
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(` Server đang chạy tại: http://localhost:${PORT}`);
});

module.exports = app;