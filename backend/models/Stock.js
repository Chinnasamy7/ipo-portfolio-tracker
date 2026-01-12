const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    stockName: String,
    buyPrice: Number,
    currentPrice: Number,
    quantity: Number
});

module.exports = mongoose.model("Stock", StockSchema);
