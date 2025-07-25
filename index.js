import express from "express";

const app = express();

app.use((req, res, next) => {
    //res.json({'message': "Api en mantenimiento!!"})
    console.log(req.method);
    next();
})

app.get('/', (req, res) => {
    res.json({'message': 'Api Rest!!'});
});

import notFound from "./src/middleware/not-found.js";
app.use(notFound);

const port= 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));