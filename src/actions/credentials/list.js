/** List of client credentials 
 * @param {object} controller
 * @param {string} user from req.body
 * @param {object} res from express
 * @returns {response} message
 */
module.exports = async (controller, { user }, res) => {
	try {
		// Credentials model
		const { Credentials } = controller[Symbol.for("models")]

		// Find credentials
		const credentials = await Credentials.find({ user })

		// Return credentials
		return controller.infoMessage(res, 200, {
			credentials
		})
	} catch (error) {
		throw error
	}
}