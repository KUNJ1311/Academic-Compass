const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExamCellSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
const ExamCell = mongoose.model("ExamCell", ExamCellSchema);

module.exports = ExamCell;
