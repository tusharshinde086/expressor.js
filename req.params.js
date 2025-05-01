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
    let {q }= req.query;
    if(!q){
        res.send("<h1>nothing searched </h1>");
    }
    res.send(`search by result or query: ${q}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
