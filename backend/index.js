const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => console.log("DB Connection Succes"))
    .catch((err) => console.log(err));

app.listen(5000, () => {
    console.log("Server is running");
})