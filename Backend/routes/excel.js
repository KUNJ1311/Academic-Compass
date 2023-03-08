const express = require("express");
const excel = express();
const fs = require("fs");
const fetchuser = require("../middleware/fetchUser");

const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
var csv = require("csvtojson");
excel.use(bodyParser.urlencoded({ extended: true }));
excel.use(express.static(path.resolve(__dirname, "excel")));
const Sem1 = require("../models/Sem1");
const Sem2 = require("../models/Sem2");
const Sem3 = require("../models/Sem3");
const Sem4 = require("../models/Sem4");
const Sem5 = require("../models/Sem5");
const Sem6 = require("../models/Sem6");
const Sem7 = require("../models/Sem7");
const Sem8 = require("../models/Sem8");

const Studentdata = require("../models/Studentdata");

excel.use(express.static(path.resolve(__dirname, "excel")));
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "../excel");
	},
	filename: (req, file, cb) => {
		if (file.mimetype !== "text/csv") {
			return cb(new Error("Only CSV files are allowed"));
		}
		cb(null, Date.now() + "_" + file.originalname);
	},
});

var upload = multer({ storage: storage });
const Semesters = [
	{ number: 1, model: Sem1 },
	{ number: 2, model: Sem2 },
	{ number: 3, model: Sem3 },
	{ number: 4, model: Sem4 },
	{ number: 5, model: Sem5 },
	{ number: 6, model: Sem6 },
	{ number: 7, model: Sem7 },
	{ number: 8, model: Sem8 },
	// add more semesters if needed
];
Semesters.forEach((semester) => {
	excel.post(`/importexcel/sem${semester.number}/testfirst`, fetchuser, upload.single("file"), async (req, res) => {
		try {
			const jsonArray = await csv().fromFile(req.file.path);
			for (let x = 0; x < jsonArray.length; x++) {
				const subjectMarks = [];
				const subject = jsonArray[x].subject;
				const subjectCode = jsonArray[x].course_code;
				const marks = jsonArray[x].marks;
				subjectMarks.push({ subject: subject, course_code: subjectCode, marks: marks });
				const semesterData = {
					enrolment: jsonArray[x].enrolment,
					name: jsonArray[x].name,
					testfirst: subjectMarks,
				};
				const { enrolment, name, testfirst, testsecond, testfinal } = semesterData;
				let studentdata = await Studentdata.findOne({ enrolment: semesterData.enrolment });
				if (!studentdata) {
					studentdata = new Studentdata({
						enrolment,
						name,
						password: "IU@123",
					});
					const semesterModel = new semester.model({
						user: studentdata._id,
						enrolment,
						name,
						testfirst,
						testsecond,
						testfinal,
					});
					await studentdata.save();
					await semesterModel.save();
				} else {
					let studentdata = await Studentdata.findOne({ enrolment: semesterData.enrolment });
					let semesterModel = await semester.model.findOne({ user: studentdata._id });
					if (!semesterModel) {
						const semesterModel = new semester.model({
							user: studentdata._id,
							enrolment,
							name,
							testfirst,
							testsecond,
							testfinal,
						});
						await semesterModel.save();
					} else {
						if (!semesterModel.testfirst) {
							semesterModel.testfirst = testfirst;
						} else {
							semesterModel.testfirst = [...semesterModel.testfirst, ...testfirst];
						}
						await semesterModel.save();
					}
				}
			}
			// fs.unlinkSync(req.file.path);
			res.send({ status: 200, success: true, msg: "CSV Imported" });
		} catch (error) {
			res.send({ status: 400, success: false, msg: error.message });
		}
	});
});

Semesters.forEach((semester) => {
	excel.post(`/importexcel/sem${semester.number}/testsecond`, fetchuser, upload.single("file"), async (req, res) => {
		try {
			const jsonArray = await csv().fromFile(req.file.path);
			for (let x = 0; x < jsonArray.length; x++) {
				const subjectMarks = [];
				const subject = jsonArray[x].subject;
				const subjectCode = jsonArray[x].course_code;
				const marks = jsonArray[x].marks;
				subjectMarks.push({ subject: subject, course_code: subjectCode, marks: marks });
				const semesterData = {
					enrolment: jsonArray[x].enrolment,
					name: jsonArray[x].name,
					testsecond: subjectMarks,
				};
				const { enrolment, name, testsecond, testfinal, testfirst } = semesterData;
				let studentdata = await Studentdata.findOne({ enrolment: semesterData.enrolment });
				if (!studentdata) {
					studentdata = new Studentdata({
						enrolment,
						name,
						password: "IU@123",
					});
					const semesterModel = new semester.model({
						user: studentdata._id,
						enrolment,
						name,
						testfirst,
						testsecond,
						testfinal,
					});
					await studentdata.save();
					await semesterModel.save();
				} else {
					let studentdata = await Studentdata.findOne({ enrolment: semesterData.enrolment });
					let semesterModel = await semester.model.findOne({ user: studentdata._id });
					if (!semesterModel) {
						const semesterModel = new semester.model({
							user: studentdata._id,
							enrolment,
							name,
							testfirst,
							testsecond,
							testfinal,
						});
						await semesterModel.save();
					} else {
						if (!semesterModel.testsecond) {
							semesterModel.testsecond = testsecond;
						} else {
							semesterModel.testsecond = [...semesterModel.testsecond, ...testsecond];
						}
						await semesterModel.save();
					}
				}
			}
			// fs.unlinkSync(req.file.path);
			res.send({ status: 200, success: true, msg: "CSV Imported" });
		} catch (error) {
			res.send({ status: 400, success: false, msg: error.message });
		}
	});
});

Semesters.forEach((semester) => {
	excel.post(`/importexcel/sem${semester.number}/testfinal`, fetchuser, upload.single("file"), async (req, res) => {
		try {
			const jsonArray = await csv().fromFile(req.file.path);
			for (let x = 0; x < jsonArray.length; x++) {
				const subjectMarks = [];
				const subject = jsonArray[x].subject;
				const subjectCode = jsonArray[x].course_code;
				const marks = jsonArray[x].marks;
				subjectMarks.push({ subject: subject, course_code: subjectCode, marks: marks });
				const semesterData = {
					enrolment: jsonArray[x].enrolment,
					name: jsonArray[x].name,
					testfinal: subjectMarks,
				};
				const { enrolment, name, testfinal, testfirst, testsecond } = semesterData;
				let studentdata = await Studentdata.findOne({ enrolment: semesterData.enrolment });
				if (!studentdata) {
					studentdata = new Studentdata({
						enrolment,
						name,
						password: "IU@123",
					});
					const semesterModel = new semester.model({
						user: studentdata._id,
						enrolment,
						name,
						testfirst,
						testsecond,
						testfinal,
					});
					await studentdata.save();
					await semesterModel.save();
				} else {
					let studentdata = await Studentdata.findOne({ enrolment: semesterData.enrolment });
					let semesterModel = await semester.model.findOne({ user: studentdata._id });
					if (!semesterModel) {
						const semesterModel = new semester.model({
							user: studentdata._id,
							enrolment,
							name,
							testfirst,
							testsecond,
							testfinal,
						});
						await semesterModel.save();
					} else {
						if (!semesterModel.testfinal) {
							semesterModel.testfinal = testfinal;
						} else {
							semesterModel.testfinal = [...semesterModel.testfinal, ...testfinal];
						}
						await semesterModel.save();
					}
				}
			}
			// fs.unlinkSync(req.file.path);
			res.send({ status: 200, success: true, msg: "CSV Imported" });
		} catch (error) {
			res.send({ status: 400, success: false, msg: error.message });
		}
	});
});
module.exports = excel;
