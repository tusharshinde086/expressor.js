const express = require('express');
const app = express();
const port = 8000;


// Middleware (should be before routes if it's global)

// app.use --------------------------
app.use((req, res, next) => {
  console.log("Request received");
  
//res.send("This is a basic respnse ");
//  object response --------
res.send({
    name: "apple",
    color : "red",
});
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
