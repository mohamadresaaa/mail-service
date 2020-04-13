const router = require("express").Router()

// Controllers
const { mail } = require("../controllers")

router.get("/", mail.list)
router.get("/:id", mail.details)
router.post("/", mail.create)
router.put("/:id", mail.edit)
router.delete("/:id", mail.remove)

// Exports router
module.exports = router