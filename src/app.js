const { createServer } = require("http")
const express = require("express")
const mongoose = require("mongoose")
const helmet = require("helmet")

module.exports = class App {
    constructor() {
        this.app = express()
    }

    /** Run all methods
	 * @public
	 */
	initialize() {
        this.setupExpress()
        this.setupMongodb()
        this.configuration()
	}

    /** Setup server with express
	 * @private
	 * @package http, express
	 */
    setupExpress() {
        const server = createServer(this.app)
        server.listen(3000, () =>  console.log("Server running on port 3000"))
    }

    /** Setup mongodb and set config
	 * @private
	 * @package mongoose
	 */
    setupMongodb() {
        mongoose.Promise = global.Promise
		mongoose.connect("", {
			useCreateIndex: true,
			useFindAndModify: false,
			useNewUrlParser: true,
			useUnifiedTopology: true
		},
		err => {
			err ? console.log(err.message) : console.log("Database connected")
		})
    }

    /** Setup and using packages
	 * @private
	 * @package helmet, cors, body-parser, contentType, morgan
	 */
    configuration() {
        this.app.use(helmet())
    }
}