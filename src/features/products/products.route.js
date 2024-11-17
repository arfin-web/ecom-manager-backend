const express = require("express")
const {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
} = require("./products.controller")

const router = express.Router()

router.post("/products", createProduct)
router.get("/products", getProducts)
router.put("/products/:id", updateProduct)
router.delete("/products/:id", deleteProduct)

module.exports = router