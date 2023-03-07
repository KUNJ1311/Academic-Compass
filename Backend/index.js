const connectToMongo = require("./db");
connectToMongo();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", require("./routes/student"), express.static("uploads"));

var excel = require("./routes/excel");
app.use("/data", excel);
app.get("/api/", (req, res) => {
	res.send("Hello!");
});

app.listen(port, () => {
	console.log(`backend listening at http://localhost:${port}`);
});
