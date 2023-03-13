const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
	console.log("successfully connected");
});

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", require("./routes/student"), express.static("uploads"));
app.use("/api/auth-examcell", require("./routes/examcell"));
app.use("/data-students", require("./routes/excelstudents"));
app.use("/data-marks", require("./routes/excelmarks"));
app.get("/api/", (req, res) => {
	res.send("Hello!");
});

app.listen(port, () => {
	console.log(`backend listening at http://localhost:${port}`);
});
