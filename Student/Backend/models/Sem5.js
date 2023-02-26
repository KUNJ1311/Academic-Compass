const mongoose = require("mongoose");
const { Schema } = mongoose;

const Sem5Schema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "studentdata",
	},
	testfirst: {},
	testsecond: {},
	testfinal: {},
	attendance: {},
});

const Sem5 = mongoose.model("sem5", Sem5Schema);
module.exports = Sem5;
