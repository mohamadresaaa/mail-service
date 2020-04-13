const router = require("express").Router()

// Import routes
const apiKey = require("./apiKey")
const mail = require("./mail")

// Use routes
router.use("/apiKeys", apiKey)
router.use("/mails", mail)

// Exports router
module.exports = router