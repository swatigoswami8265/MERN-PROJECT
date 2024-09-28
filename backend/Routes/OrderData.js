const express = require("express");
const router = express.Router();
const Order = require('../models/Orders');
const { findOne } = require("../models/User");

router.post('/orderData', async (req, res) => {
    try {
        let data = req.body.order_data;
        data.splice(0, 0, { Order_date: new Date() });

        const order = await Order.findOneAndUpdate(
            { email: req.body.email },
            { $push: { order_data: data } },
            { new: true, upsert: true }
        );

        if (!order) {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            });
        }

        res.json({ success: true });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Server Error", message: error.message });
    }
});

// myorderdata
router.post('/myorderData', async (req, res) => {
    try {
        let myData = await Order.findOne({"email":req.body.email})
        req.json({orderData:myData})
    } catch (error) {
        res.send("Server Error", error.message)
    }
})
module.exports = router;

