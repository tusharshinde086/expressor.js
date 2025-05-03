const express = require('express');
const app = express();
const port = 3000;

// Route for root URL
app.get('/', (req, res) => {
  res.send('Hello World! by ts');
});

// Middleware (should be before routes if it's global)

// app.use --------------------------
app.use((req, res, next) => {
  console.log("Request received");
  next(); // Important to allow the request to continue


});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
