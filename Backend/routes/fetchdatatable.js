const express = require("express");
const fetchdatatable = express();
const Studentdata = require("../models/Studentdata");
const fetchuser = require("../middleware/fetchUser");
fetchdatatable.post(`/students/data`, fetchuser, async (req, res) => {
	try {
		const query = {
			course: req.body.course,
			branch: req.body.branch,
			school: req.body.school,
			year: req.body.year,
		};

		const docs = await Studentdata.find(query).exec();
		console.log(docs);

		res.send({ status: 200, success: true });
	} catch (error) {
		res.send({ status: 400, success: false, msg: error.message });
	}
});

module.exports = fetchdatatable;
