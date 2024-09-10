const express = require('express')
const app = express()
const bodyParser=require("body-parser")
const PORT = 5000
 
app.get("/",(req, res) => {
  res.send("hello from Home.")
})
  
//Adding Body Parser For JSON
app.use(bodyParser.json())

//This is dummy API

app.get("/api/v1", (req, res) => {
  res.json(
    {
      message: "Hello from the API Version 1"
    }
  )
})


app.listen(PORT, () => console.log('Server running on port: http://localhost:${PORT}'));

