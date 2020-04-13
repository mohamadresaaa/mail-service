const router = require("express").Router()

// Controllers
const { credential } = require("../controllers")

router.get("/", credential.list)
router.post("/", credential.create)
router.put("/:id", credential.edit)
router.delete("/:id", credential.remove)

// Exports router
module.exports = router