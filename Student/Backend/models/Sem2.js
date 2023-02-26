const mongoose = require("mongoose");
const { Schema } = mongoose;

const Sem2Schema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "studentdata",
	},
	testfirst: {},
	testsecond: {},
	testfinal: {},
	attendance: {},
});

const Sem2 = mongoose.model("sem2", Sem2Schema);
module.exports = Sem2;
