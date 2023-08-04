const express = require('express') //import express
const app = express() //tạo app để chạy
const port = 3000 //cổng chạy server trên windows

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Long hoàng')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})