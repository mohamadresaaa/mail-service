const router = require("express").Router()

// Import routes
const credential = require("./credential")
const mail = require("./mail")

// Use routes
router.use("/credentials", credential)
router.use("/mails", mail)

// Exports router
module.exports = router