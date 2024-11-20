const Order = require("./orders.mode;")

const createOrder = async (req, res) => {
    try {
        const { title, description, note, date } = req.body
        const newOrder = new Order({ title, description, note, date })
        await newOrder.save()
        res.status(201).json({
            message: "Order created successfully",
            data: newOrder
        })
    } catch (error) {
        res.status(500).json({ message: "Error creating Order", error })
    }
}

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json({
            message: "Orders fetched successfully",
            data: orders
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders", error })
    }
}

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params
        const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found" })
        }
        res.status(200).json({
            message: "Order updated successfully",
            data: updatedOrder
        })
    } catch (error) {
        res.status(500).json({ message: "Error updating Order", error })
    }
}

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params
        const deletedOrder = await Order.findByIdAndDelete(id)
        if (!deletedOrder) {
            return res.status(404).json({ message: "Order not found" })
        }
        res.status(200).json({
            message: "Order deleted successfully",
            data: deletedOrder
        })
    } catch (error) {
        res.status(500).json({ message: "Error deleting Order", error })
    }
}

module.exports = {
    createOrder,
    getOrders,
    updateOrder,
    deleteOrder
}