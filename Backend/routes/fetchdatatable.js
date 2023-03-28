const express = require("express");
const fetchdatatable = express();
const Studentdata = require("../models/Studentdata");
const fetchuser = require("../middleware/fetchUser");
fetchdatatable.post(`/students/data`, fetchuser, async (req, res) => {
	try {
		const query = {};
		if (req.body.course) {
			query.course = req.body.course;
		}
		if (req.body.branch) {
			query.branch = req.body.branch;
		}
		if (req.body.school) {
			query.school = req.body.school;
		}
		if (req.body.year) {
			query.year = req.body.year;
		}
		const students = await Studentdata.find(query, { name: 1, enrolment: 1, _id: 0 }).exec();
		res.send({ status: 200, success: true, data: students });
	} catch (error) {
		res.send({ status: 400, success: false, msg: error.message });
	}
});

module.exports = fetchdatatable;
