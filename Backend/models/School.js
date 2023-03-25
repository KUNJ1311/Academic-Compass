const mongoose = require("mongoose");
const { Schema } = mongoose;

const subjectSchema = new Schema({
	subject: String,
	courseCode: String,
});
const schoolSchema = new Schema({
	school: {
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
	semesters: {
		sem1: [subjectSchema],
		sem2: [subjectSchema],
		sem3: [subjectSchema],
		sem4: [subjectSchema],
		sem5: [subjectSchema],
		sem6: [subjectSchema],
		sem7: [subjectSchema],
		sem8: [subjectSchema],
	},
});
const School = mongoose.model("Subject", schoolSchema);

module.exports = School;
