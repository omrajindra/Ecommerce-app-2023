import express from "express";
import colors from "colors";

//rest object
const app = express();

//rest api
app.get("/" ,(req, res) => {
    res.send("<h1>Welcome to</h1>");
});
//port
const PORT =8080;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`, bgCyan.white);
});

