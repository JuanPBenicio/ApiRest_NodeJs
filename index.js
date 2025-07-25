import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Api Rest!!");
});

const port= 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));