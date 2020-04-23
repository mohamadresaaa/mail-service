const { ErrorMessage } = require("../lib/messages")
const { Credentials } = require("../models")

// Make sure the user has access to the service
module.exports = async (req, res, next) => {
	try {
		// Get apiKey from header [api-key]
		const apiKey = req.headers["api-key"]

		// If exists apiKey, handle it
		if (apiKey) {
			// Find credential with apiKey
			const credentials = await Credentials.findOne({
				apiKey
			})

			// If exists, handle it
			if (credentials) {
				// Set credentials to req.credentials and return next
				// eslint-disable-next-line require-atomic-updates
				req.credentials = credentials
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