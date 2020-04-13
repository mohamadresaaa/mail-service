const router = require("express").Router()

router.get("/", (req, res) => {
	res.send("list of apiKeys")
})
router.post("/", (req, res) => {
	res.send("create new apiKey")
})
router.put("/:id", (req, res) => {
	res.send("update apiKey")
})
router.delete("/:id", (req, res) => {
	res.send("remove apiKey")
})

// Exports router
module.exports = router