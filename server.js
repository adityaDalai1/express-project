import express from 'express';
const app = express();

import bodyParser from 'body-parser'

import userRoutes from './routes/user.js'

const PORT = 5000;
 
app.get("/",(req, res) => {
  res.send("hello from Home.")
})
  
//Adding Body Parser For JSON


//This is dummy API

app.get("/api/v1", (req, res) => {
  console.log("in the api route")
  res.json(
    {
      message: "Hello from the API Version 1"
    }
  )
})
app.use(bodyParser.json());

app.use('/user',userRoutes);

app.listen(PORT,() => {
  console.log('server started on port ${PORT}');
})

