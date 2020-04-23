const { Schema, model } = require("mongoose")

const credentialsSchema = new Schema({
	apiKey: {
		type: String,
		unique: true
	},
	name: {
		required: true,
		type: String
	},
	user: {
		ref: "User",
		required: true,
		type: Schema.Types.ObjectId
	}
})

// Index fields
credentialsSchema.index({ apiKey: 1 })

module.exports = model("Credentials", credentialsSchema)