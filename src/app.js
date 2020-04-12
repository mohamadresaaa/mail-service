const { createServer } = require("http")
const { json, urlencoded } = require("body-parser")
const cors = require("cors")
const express = require("express")
const helmet = require("helmet")
const mongoose = require("mongoose")
const morgan = require("morgan")

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
		this.app.use(cors({
			credentials: true,
			methods: "GET, POST, PUT, DELETE",
			origin: "*"
		}))
		this.app.use(json())
		this.app.use(urlencoded({
			extended: true
		}))
		this.app.use(morgan("dev"))
	}
}