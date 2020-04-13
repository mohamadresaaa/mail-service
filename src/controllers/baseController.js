const autoBind = require("auto-bind")
const models = require("../models")

module.exports = class BaseController {
	constructor () {
		// Binding methods for using on child classes
		autoBind(this)
        
		// Set models
		this[Symbol.for("models")] = models
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