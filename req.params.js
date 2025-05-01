const express = require('express');
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("Hello, I am ts");
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    res.send(`Welcome to the page of @${username} with ID ${id}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
