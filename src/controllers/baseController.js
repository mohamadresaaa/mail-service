const autoBind = require("auto-bind")

module.exports = class BaseController {
	constructor () {
		// Binding methods for using on child classes
		autoBind(this)
	}

	/** Show public info message
   * @param {response} express
   * @param {number} status
   * @param {object} data
   * @return response
   */
	infoMessage (res, status, data) {
		res.status(status).json(data)
	}
}