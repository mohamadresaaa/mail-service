const router = require("express").Router()

router.get("/", (req, res) => {
	res.send("mails")
})
router.get("/:id", (req, res) => {
	res.send("details of mail")
})
router.post("/", (req, res) => {
	res.send("send and create mail")
})
router.put("/:id", (req, res) => {
	res.send("update mail")
})
router.delete("/:id", (req, res) => {
	res.send("remove mail")
})

// Exports router
module.exports = router