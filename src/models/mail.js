const { Schema, model } = require("mongoose")

const mailSchema = new Schema({
	apiKey: {
		ref: "ApiKey",
		required: true,
		type: Schema.Types.ObjectId
	},
	content: {
		required: true,
		type: String
	},
	from: {
		required: true,
		type: String
	},
	sendAt: {
		type: Date
	},
	status: {
		required: true,
		type: String
	},
	subject: {
		required: true,
		type: String
	},
	to: {
		required: true,
		type: String
	}
}, {
	timestamps: true
})

module.exports = model("Mail", mailSchema)