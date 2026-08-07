const express = require("express");
const cors = require("cors");
const db = require("./db");
const productRoutes = require("./routes/products");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to ScentHub API");
});

app.listen(PORT, () => {
    console.log("====================================");
    console.log(" ScentHub Server Started");
    console.log(` Server running on http://localhost:${PORT}`);
    console.log(` Started at: ${new Date().toLocaleString()}`);
    console.log("====================================");
});