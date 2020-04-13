const router = require("express").Router()

// Import routes
const apiKey = require("./apiKey")

// Use routes
router.use("/apiKeys", apiKey)

// Exports router
module.exports = router