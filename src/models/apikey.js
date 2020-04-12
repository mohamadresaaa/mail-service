const { Schema, model } = require("mongoose")

const apiKeySchema = new Schema({
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
apiKeySchema.index({ apiKey: 1 })

module.exports = model("ApiKey", apiKeySchema)