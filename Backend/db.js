const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_KEY;

const connectToMongo = () => {
	mongoose.connect(mongoURI, () => {
		console.log("successfully connected");
	});
};
mongoose.set("strictQuery", false);

module.exports = connectToMongo;
