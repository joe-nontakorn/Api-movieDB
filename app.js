const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000; // หรือพอร์ตที่คุณต้องการใช้

const apiKey = '6c73ac3eac122c09d74afa138d4f396d'; // ใส่ API Key ของคุณที่นี่

app.get('/watch/list', async (req, res) => {
  try {
    const tmdbResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    const data = await tmdbResponse.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'เกิดข้อผิดพลาดในการดึงข้อมูล' });
  }
});

app.listen(port, () => {
  console.log(`เซิร์ฟเวอร์ API กำลังทำงานที่พอร์ต ${port}`);
});


app.get('/watch/list/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    try {
      const tmdbResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
      const data = await tmdbResponse.json();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'เกิดข้อผิดพลาดในการดึงข้อมูล' });
    }
  });


  app.get('/search', async (req, res) => {
    const query = req.query.query; // รับคำค้นหาจากพารามิเตอร์ query
    try {
      const tmdbResponse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
      const data = await tmdbResponse.json();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'เกิดข้อผิดพลาดในการค้นหาหนัง' });
    }
  });
  
