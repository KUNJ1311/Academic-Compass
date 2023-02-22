const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentdataSchema = new Schema({
	enrolment: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	branch: {
		type: String,
		required: true,
	},
	course: {
		type: String,
		required: true,
	},
	dob: {
		type: String,
		required: true,
	},
	img: {
		data: Buffer,
		contentType: String,
	},
});

const Studentdata = mongoose.model("studentdata", StudentdataSchema);
module.exports = Studentdata;
