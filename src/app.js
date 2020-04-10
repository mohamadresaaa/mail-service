const { createServer } = require("http")
const express = require("express")

module.exports = class App {
    constructor() {
        this.app = express()
    }

    /** Run all methods
	 * @public
	 */
	initialize() {
		this.setupExpress()
	}

    /** Setup server with express
	 * @private
	 * @package http, express
	 */
    setupExpress() {
        const server = createServer(this.app)
        server.listen(3000, () =>  console.log("Server running on port 3000"))
    }
}