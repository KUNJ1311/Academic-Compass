const express = require("express");
const addsubjects = express();
const fs = require("fs");
const fetchuser = require("../middleware/fetchUser");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
var csv = require("csvtojson");
addsubjects.use(bodyParser.urlencoded({ extended: true }));

const School = require("../models/School");
addsubjects.use(express.static(path.resolve(__dirname, "excel")));
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
addsubjects.post(`/importexcel/subjects`, fetchuser, upload.single("file"), async (req, res) => {
	try {
		const branch = req.body.branch;
		const course = req.body.course;
		const school = req.body.school;
		const semester = req.body.semester;
		const query = {
			branch,
			course,
			school,
		};
		const jsonArray = await csv().fromFile(req.file.path);
		// Find the school with the given name
		let schoolDoc = await School.findOne(query).exec();
		if (!schoolDoc) {
			// Create a new school if one doesn't exist
			schoolDoc = new School({ school: school, course: course, branch: branch, semesters: {} });
		}
		// Update the subjects if a course code already exists
		for (let x = 0; x < jsonArray.length; x++) {
			const subject = jsonArray[x].subject;
			const courseCode = jsonArray[x].course_code;
			const semesterKey = `sem${semester}`;
			if (!schoolDoc.semesters[semesterKey]) {
				// Create a new semester if one doesn't exist
				schoolDoc.semesters[semesterKey] = [];
			}
			// Check if the course code already exists in the semester
			const subjectIndex = schoolDoc.semesters[semesterKey].findIndex((subj) => subj.courseCode === courseCode);
			if (subjectIndex !== -1) {
				// Update the subject name if the course code already exists
				schoolDoc.semesters[semesterKey][subjectIndex].subject = subject;
			} else {
				schoolDoc.semesters[semesterKey].push({ subject: subject, courseCode: courseCode });
			}
		}

		// Save the changes to the database
		await schoolDoc.save();
		fs.unlinkSync(req.file.path);
		res.send({ status: 200, success: true, msg: "CSV Imported" });
	} catch (error) {
		res.send({ status: 400, success: false, msg: error.message });
		console.log(error);
	}
});

module.exports = addsubjects;
