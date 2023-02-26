const mongoose = require("mongoose");
const { Schema } = mongoose;

const Sem3Schema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "studentdata",
	},
	testfirst: {},
	testsecond: {},
	testfinal: {},
	attendance: {},
});

const Sem3 = mongoose.model("sem3", Sem3Schema);
module.exports = Sem3;
