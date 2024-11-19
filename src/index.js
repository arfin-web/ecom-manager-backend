const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors");
const dbConnect = require("./config/dbConnect")
const authRoutes = require("./features/auth/auth.route")
const customersRoute = require("./features/customers/customers.route")
const productsRoute = require("./features/products/products.route")
const noticeRoute = require("./features/notice/notice.route")

dbConnect()

const app = express()
app.use(express.json())

const corsOptions = {
    origin: ['http://localhost:3000', 'https://ecom-manager.vercel.app'],
    credentials: true,
    optionSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));

// Routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1", customersRoute)
app.use("/api/v1", productsRoute)
app.use("/api/v1", noticeRoute)

// Define Root Get Route
app.get("/", (req, res) => {
    res.send("Welcome to the API")
})

// Start the Server
const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})