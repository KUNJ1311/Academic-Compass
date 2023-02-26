const mongoose = require("mongoose");
const { Schema } = mongoose;

const Sem8Schema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "studentdata",
	},
	testfirst: {},
	testsecond: {},
	testfinal: {},
	attendance: {},
});

const Sem8 = mongoose.model("sem8", Sem8Schema);
module.exports = Sem8;
