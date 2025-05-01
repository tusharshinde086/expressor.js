
//routing 
// it is a process of selecting specific path for traffic in 
// network or bet.n or accrocc network.
// 
const express = require('express');
const app = express();
const port = 4000;

app.get("/",(req,res)=>{
    res.send("you contacteds root path ");
});

app.get("/apple",(req,res)=>{
    res.send("you contacted apple path ");
});

app.get("/search",(req,res)=>{
    res.send("you contacted search path ");
});
app.get("*",(req,res)=>{
    res.send("this path does not exist!");
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  