const express = require('express');
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("Hello, I am ts");
});

// Example of dynamic URL parameters
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    res.send(`<h1>Welcome to the page of @${username} with ID ${id}!</h1>`);
});

//  Query parameter route
app.get("/search", (req, res) => {
    console.log(req.query); // log the query params
    res.send("No results");
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
