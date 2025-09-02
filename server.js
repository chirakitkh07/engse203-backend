// server.js
const express = require('express');
require('dotenv').config(); // << เพิ่มบรรทัดนี้ที่ด้านบน

const app = express();
const PORT = process.env.PORT || 3000; // << อ่านค่า PORT จาก .env
const APP_NAME = process.env.APP_NAME;

app.get('/', (req, res) => {
  res.send(`<h1>Hello from ${APP_NAME}!</h1>`);
});

app.listen(PORT, () => {
  console.log(`🚀 ${APP_NAME} is running on http://localhost:${PORT}`);
});
//... (ส่วนบนเหมือนเดิม)

const cors = require('cors'); // << Import cors
require('dotenv').config();

app.use(cors()); // << เพิ่มบรรทัดนี้: ใช้ cors กับทุก request
//... (ส่วนที่เหลือ)

// เพิ่ม Route ใหม่สำหรับทดสอบ
app.get('/api/data', (req, res) => {
    res.json({ message: 'This data is open for everyone!' });
});

//... (ส่วนบนเหมือนเดิม)
const helmet = require('helmet'); // << Import helmet

//...
app.use(helmet()); // << เพิ่มบรรทัดนี้: ใส่เกราะป้องกัน!
app.use(cors());
//...