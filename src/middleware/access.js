const { ErrorMessage } = require("../lib/messages")
const { Credential } = require("../models")

// Make sure the user has access to the service
module.exports = async (req, res, next) => {
	try {
		// Get apiKey from header [api-key]
		const apiKey = req.headers["api-key"]

		// If exists apiKey, handle it
		if (apiKey) {
			// Find credential with apiKey
			const credential = await Credential.findOne({
				apiKey
			})

			// If exists, handle it
			if (credential) {
				return next()
			} else {
				throw new ErrorMessage("Access denied", "Access is not possible", 403)
			}
		} else {
			throw new ErrorMessage("Access denied", "Access is not possible", 403)
		}
	} catch (error) {
		next(error)
	}
}