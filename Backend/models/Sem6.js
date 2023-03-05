const mongoose = require("mongoose");
const { Schema } = mongoose;

const Sem6Schema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "studentdata",
	},
	testfirst: {},
	testsecond: {},
	testfinal: {},
	attendance: {},
});

const Sem6 = mongoose.model("sem6", Sem6Schema);
module.exports = Sem6;
