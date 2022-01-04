const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
    .connect("mongodb+srv://admin:admin123@cluster0.8gvmn.mongodb.net/react-shop?retryWrites=true&w=majority")
    .then(() => console.log("DB Connection Succes"))
    .catch((err) => console.log(err));

app.listen(5000, () => {
    console.log("Server is running");
})