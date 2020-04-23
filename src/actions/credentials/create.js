/** Create a new credential and generate apiKey
 * @param {object} controller
 * @param {string} name from req.body
 * @param {string} user from req.body
 * @param {object} res from express
 * @returns {response} apiKey
 */
module.exports = async (controller, data, res) => {
	try {
		// Credentials model
		const { Credentials } = controller[Symbol.for("models")]

		// Create new apiKey and generate it
		let credential =  await new Credentials({
			...data
		}).save()

		// Return apiKey
		return controller.infoMessage(res, 201, {
			apiKey: credential.apiKey
		})
	} catch (error) {
		throw error
	}
}