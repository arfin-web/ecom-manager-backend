const User = require("../auth/auth.model")

const getCustomers = async (req, res) => {
    try {
        const customers = await User.find()
        res.status(200).json({
            message: "Customers fetched successfully",
            data: customers
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching customers" })
    }
}

const getCustomerById = async (req, res) => {
    try {
        const customer = await User.findById(req.params.id)
        if (!customer) {
            return res.status(404).json({ message: "customer not found" })
        }
        res.status(200).json({
            message: "Customer fetched successfully",
            data: customer
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching customer" })
    }
}

const updateCustomer = async (req, res) => {
    try {
        const updatedCustomer = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!updatedCustomer) {
            return res.status(404).json({ message: "Customer not found" })
        }
        res.status(200).json({
            message: "Customer updated successfully",
            data: updatedCustomer
        })
    } catch (error) {
        res.status(500).json({ message: "Error updating Customer" })
    }
}

const deleteCustomer = async (req, res) => {
    try {
        const deletedCustomer = await User.findByIdAndDelete(req.params.id)
        if (!deletedCustomer) {
            return res.status(404).json({ message: "Customer not found" })
        }
        res.status(200).json({
            message: "Customer deleted successfully",
            data: deletedCustomer
        })
    } catch (error) {
        res.status(500).json({ message: "Error deleting Customer" })
    }
}

module.exports = {
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
}