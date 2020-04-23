/** Create a new credential and generate apiKey
 * @param {object} controller
 * @param {string} name from req.body
 * @param {string} user from req.body
 * @param {object} res from express
 * @returns {response} message
 */
module.exports = async (controller, data, res) => {
	try {
		// Credential model
		const { Credential } = controller[Symbol.for("models")]

		// Create new apiKey and generate it
		let credential =  await new Credential({
			...data
		}).save()

		// Return message
		return controller.infoMessage(res, 201, {
			apiKey: credential.apiKey
		})
	} catch (error) {
		throw error
	}
}