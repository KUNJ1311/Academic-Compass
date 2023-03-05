const mongoose = require("mongoose");
const { Schema } = mongoose;

const Sem7Schema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "studentdata",
	},
	testfirst: {},
	testsecond: {},
	testfinal: {},
	attendance: {},
});

const Sem7 = mongoose.model("sem7", Sem7Schema);
module.exports = Sem7;
