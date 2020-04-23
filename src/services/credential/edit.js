/** Create a new credential and generate apiKey
 * @param {object} controller
 * @param {string} name from req.body
 * @param {object} credentials from req
 * @param {object} res from express
 * @returns {response} message
 */
module.exports = async (controller, { body: { name }, credentials }, res) => {
	try {
		// Update name of credential
		await credentials.$set({ name }).save()

		// Return message
		return controller.infoMessage(res, 200, {
			message: "The credentials were successfully edited"
		})
	} catch (error) {
		throw error
	}
}