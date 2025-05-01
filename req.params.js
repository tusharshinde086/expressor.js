const express = require('express');
const app = express();
const port = 4000;

app.get("/",(req,res)=>{
    res.send("hello i am ts ");
});

app.get("/:names",(req,res)=>{
     console.log(req.param); 

});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  