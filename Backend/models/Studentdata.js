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
	password: {
		type: String,
		default: "IU@1234",
		required: true,
	},
	school: {
		type: String,
		required: true,
	},
	year: {
		type: String,
		required: true,
	},
	// img: {
	// 	data: Buffer,
	// 	contentType: String,
	// },
	path: {
		type: String,
	},
});

const Studentdata = mongoose.model("studentdata", StudentdataSchema);
module.exports = Studentdata;
