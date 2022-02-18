const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const categoryRoute = require("./routes/category");
const cartRoute = require("./routes/cart");
const stripeRoute = require('./routes/stripe');
const sliderRoute = require('./routes/slider');

const app = express();
dotenv.config();

mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => console.log("DB Connection Succes"))
    .catch((err) => console.log(err));


app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/carts", cartRoute);
app.use("/api/slides", sliderRoute);
app.use("/api/stripe", stripeRoute);

app.listen(5000, () => {
    console.log("Server is running");
})