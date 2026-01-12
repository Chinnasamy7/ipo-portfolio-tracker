const mongoose = require("mongoose");

const IPOSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    company: String,
    issuePrice: Number,
    listingPrice: Number,
    shares: Number
});

module.exports = mongoose.model("IPO", IPOSchema);
