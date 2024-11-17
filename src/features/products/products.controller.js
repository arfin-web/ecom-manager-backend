const Product = require("./products.model")

const createProduct = async (req, res) => {
    try {
        const { name, description, price, rate } = req.body
        const newProduct = new Product({ name, description, price, rate })
        await newProduct.save()
        res.status(201).json({
            message: "Product created successfully",
            data: newProduct
        })
    } catch (error) {
        res.status(500).json({ message: "Error creating notice", error })
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({
            message: "Products fetched successfully",
            data: products
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.status(200).json({
            message: "Product updated successfully",
            data: updatedProduct
        })
    } catch (error) {
        res.status(500).json({ message: "Error updating Product", error })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const deletedProduct = await Product.findByIdAndDelete(id)
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.status(200).json({
            message: "Product deleted successfully",
            data: deletedProduct
        })
    } catch (error) {
        res.status(500).json({ message: "Error deleting Product", error })
    }
}

module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
}