const express = require("express")
const { createOrder,
    getOrders,
    updateOrder,
    deleteOrder
} = require("./orders.controller")

const router = express.Router()

router.post("/orders", createOrder)
router.get("/orders", getOrders)
router.put("/orders/:id", updateOrder)
router.delete("/orders/:id", deleteOrder)

module.exports = router