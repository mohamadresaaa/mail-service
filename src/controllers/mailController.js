const baseController = require("./baseController")

module.exports = new class MailController extends baseController {
	async list(req, res, next) {
		try {
			res.send("mails")
		} catch (error) {
			next(error)
		}
	}

	async details (req, res, next) {
		try {
			res.send("details of mail")
		} catch (error) {
			next(error)
		}
	}

	async create (req, res, next) {
		try {
			res.send("send and create mail")
		} catch (error) {
			next(error)
		}
	}
    
	async edit(req, res, next) {
		try {
			res.send("update mail")
		} catch (error) {
			next(error)
		}
	}
    
	async remove(req, res, next) {
		try {
			res.send("remove mail")
		} catch (error) {
			next(error)
		}
	}
}