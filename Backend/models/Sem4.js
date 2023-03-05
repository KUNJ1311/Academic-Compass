const mongoose = require("mongoose");
const { Schema } = mongoose;

const Sem4Schema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "studentdata",
	},
	testfirst: {},
	testsecond: {},
	testfinal: {},
	attendance: {},
});

const Sem4 = mongoose.model("sem4", Sem4Schema);
module.exports = Sem4;
