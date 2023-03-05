const mongoose = require("mongoose");
const { Schema } = mongoose;

const Sem1Schema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "studentdata",
	},
	testfirst: {},
	testsecond: {},
	testfinal: {},
	attendance: {},
});

const Sem1 = mongoose.model("sem1", Sem1Schema);
module.exports = Sem1;
