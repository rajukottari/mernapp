const express = require('express');
const mongoDB = require('./db'); 

const app = express();
const PORT = 5000;
app.use((req, res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.use(express.json());
app.use('/api',require("./Routes/CreatUser"));
app.get('/', (req, res) =>{
  res.send('Hello World');
})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});