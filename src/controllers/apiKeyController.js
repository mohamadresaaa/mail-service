const baseController = require("./baseController")

module.exports = new class ApiKeyController extends baseController {
	async list(req, res, next) {
		try {
			res.send("list of apiKeys")
		} catch (error) {
			next(error)
		}
	}

	async create (req, res, next) {
		try {
			res.send("create new apiKey")
		} catch (error) {
			next(error)
		}
	}
    
	async edit(req, res, next) {
		try {
			res.send("update apiKey")
		} catch (error) {
			next(error)
		}
	}
    
	async remove(req, res, next) {
		try {
			res.send("remove apiKey")
		} catch (error) {
			next(error)
		}
	}
}