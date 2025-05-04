const express = require('express');
const app = express();
const port = 8000;


// Middleware (should be before routes if it's global)

// app.use --------------------------
app.use((req, res, next) => {
  console.log("Request received");
  
  //
//res.send("This is a basic respnse ");
console.log("-------------------------");
//  object response --------
// res.send({
//     name: "apple",
//     color : "red",
// });
console.log("-------------------------");

res.send("<h1>Fruits</h1><ul><li> apple</li><li> orange</li></ul>")
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//routing 
// it is a process of selecting specific path for traffic in 
// network or bet.n or accrocc network.