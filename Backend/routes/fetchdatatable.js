const express = require("express");
const fetchdatatable = express();
const Studentdata = require("../models/Studentdata");
const fetchuser = require("../middleware/fetchUser");
const SemModels = {
	sem1: require("../models/Sem1"),
	sem2: require("../models/Sem2"),
	sem3: require("../models/Sem3"),
	sem4: require("../models/Sem4"),
	sem5: require("../models/Sem5"),
	sem6: require("../models/Sem6"),
	sem7: require("../models/Sem7"),
	sem8: require("../models/Sem8"),
};
//stu data ----------------------------------------------------------
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
//stu marks ----------------------------------------------------------
fetchdatatable.post(`/students/marks`, async (req, res) => {
	try {
		const { branch, course, year, school, sem, subject, test } = req.body;
		const userData = await Studentdata.find(
			{
				branch: branch,
				course: course,
				year: year,
				school: school,
			},
			{ enrolment: 1, name: 1, _id: 1 }
		);
		let students = [];
		const SemModel = SemModels[sem];
		const semData = await SemModel.find(
			{ user: { $in: userData.map((data) => data._id) } },
			{
				user: 1,
				[test]: { $elemMatch: { subject: subject } },
				_id: 1,
			}
		);
		if (semData && semData.length > 0) {
			students = semData
				.filter((data) => data[test] && data[test].length > 0)
				.map((data) => {
					const studentData = userData.find((d) => d._id.toString() === data.user.toString());
					const testmarks = data[test][0];
					return {
						enrolment: studentData.enrolment,
						name: studentData.name,
						marks: testmarks.marks,
					};
				});
			res.send(students);
		} else {
			return res.send(students); // or return an error message
		}
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

module.exports = fetchdatatable;
