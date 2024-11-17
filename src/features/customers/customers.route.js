const express = require("express")
const {
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
} = require("./customers.controller")

const router = express.Router()

router.get("/customers", getCustomers)
router.get("/customers/:id", getCustomerById)
router.put("/customers/:id", updateCustomer)
router.delete("/customers/:id", deleteCustomer)

module.exports = router