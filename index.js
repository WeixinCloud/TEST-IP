const express = require('express')
const ip = require('ip')
const app = express()
app.use(express.json())

app.all('/', (req, res) => {
  res.send({
    ip: ip.address(),
    headers: req.headers,
    env: process.env
  })
})

const port = process.env.PORT || 80

app.listen(port, () => {
  console.log('启动成功', port)
})
