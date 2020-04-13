const router = require("express").Router()

// Controllers
const { apiKey } = require("../controllers")

router.get("/", apiKey.list)
router.post("/", apiKey.create)
router.put("/:id", apiKey.edit)
router.delete("/:id", apiKey.remove)

// Exports router
module.exports = router