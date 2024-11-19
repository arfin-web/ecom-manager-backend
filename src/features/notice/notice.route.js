const express = require("express")
const { createNotice,
    getNotice,
    updateNotice,
    deleteNotice
} = require("./notice.controller")

const router = express.Router()

router.post("/notices", createNotice)
router.get("/notices", getNotice)
router.put("/notices/:id", updateNotice)
router.delete("/notices/:id", deleteNotice)

module.exports = router