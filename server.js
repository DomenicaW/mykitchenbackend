const express = require('express')
const app = express()


const PORT = 3001

app.get('/', (req, res) =>{
  res.send('im working here')
})
app.listen(PORT, () =>{
  console.log('server is running 🥳')
})
