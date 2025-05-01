const express = require('express');
const app = express();
const port = 4000;

app.get("/",(req,res)=>{
    res.send("hello i am ts ");
});

// app.get("/:names",(req,res)=>{
//      console.log(req.params); 
//     res.send("hello i m root");
// });

//---------------------------------------------------------

// app.get("/:username/:id",(req,res)=>{
    
//     let {username , id }= req.params;
//      htmlStr=`<h1>welcome to the page of @${username}!</h1>;
// });
//--------------------------------------------------------------
app.get("/:username/:id",(req,res)=>{
    
    let {username , id }= req.params;
   res.send(`welcome to the page of @${username},`);
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  