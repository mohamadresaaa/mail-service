const { Schema, model } = require("mongoose")

const credentialSchema = new Schema({
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
credentialSchema.index({ apiKey: 1 })

module.exports = model("Credential", credentialSchema)