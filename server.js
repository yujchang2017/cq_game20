const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// 提供靜態檔案
app.use(express.static(__dirname));

// 首頁路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
