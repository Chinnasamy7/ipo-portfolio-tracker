const express = require("express");
const IPO = require("../models/IPO");
const Stock = require("../models/Stock");

const router = express.Router();

router.post("/ipo", async (req, res) => {
    const ipo = new IPO(req.body);
    await ipo.save();
    res.send("IPO added");
});

router.post("/stock", async (req, res) => {
    const stock = new Stock(req.body);
    await stock.save();
    res.send("Stock added");
});

router.get("/profit/:userId", async (req, res) => {
    const stocks = await Stock.find({ userId: req.params.userId });
    let profit = 0;
    stocks.forEach(s => {
        profit += (s.currentPrice - s.buyPrice) * s.quantity;
    });
    res.json({ profit });
});

module.exports = router;
