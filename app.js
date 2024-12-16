import sqlite3 from "sqlite3";
import cars from "cars";
import express from "express";

const app = express();

app.use(cars.js);
app.use(express.json);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message })
});


const startServer = async () =>{
    await initializeDB();
    app.listen(3000, () => console.log("Server is running on port 3000"));
}

startServer();