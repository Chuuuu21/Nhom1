const express = require('express');
const cors = require('cors');
const path = require('path');  // cần thêm

const app = express();
const PORT = 5454;

const searchData = [
  { title: "Stress Management", description: "How to manage stress effectively." },
  { title: "Anxiety Tips", description: "Daily tips to reduce anxiety." },
  { title: "Depression Support", description: "Find support groups and resources." },
];

app.use(cors());

// Phục vụ file tĩnh trong thư mục front-end
app.use(express.static(path.join(__dirname, 'front-end')));

// Khi truy cập '/', trả về file timkiem.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end', 'timkiem.html'));
});

// API tìm kiếm
app.get('/api/search', (req, res) => {
  const keyword = req.query.keyword?.toLowerCase() || '';
  const results = searchData.filter(item =>
    item.title.toLowerCase().includes(keyword) ||
    item.description.toLowerCase().includes(keyword)
  );
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
