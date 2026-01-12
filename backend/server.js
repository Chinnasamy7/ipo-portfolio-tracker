const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const portfolioRoutes = require("./routes/portfolio");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ipo_tracker")
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);

app.get("/", (req, res) => {
    res.send("IPO Portfolio Tracker API Running");
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
