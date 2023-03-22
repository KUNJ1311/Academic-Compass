const express = require("express");
const excelstudents = express();
const fs = require("fs");
const fetchuser = require("../middleware/fetchUser");

const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
var csv = require("csvtojson");
excelstudents.use(bodyParser.urlencoded({ extended: true }));

const Studentdata = require("../models/Studentdata");

excelstudents.use(express.static(path.resolve(__dirname, "excel")));
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

excelstudents.post(`/importexcel`, fetchuser, upload.single("file"), async (req, res) => {
	try {
		const branch = req.body.branch;
		const course = req.body.course;
		const school = req.body.school;
		const year = req.body.year;
		const jsonArray = await csv().fromFile(req.file.path);
		for (let x = 0; x < jsonArray.length; x++) {
			const enrolment = jsonArray[x].enrolment;
			const name = jsonArray[x].name;
			let user = await Studentdata.findOne({ enrolment: enrolment });
			if (!user) {
				const saveData = new Studentdata({
					enrolment,
					name,
					branch,
					course,
					school,
					year,
				});
				await saveData.save();
			}
		}
		fs.unlinkSync(req.file.path);
		res.send({ status: 200, success: true, msg: "CSV Imported" });
	} catch (error) {
		res.send({ status: 400, success: false, msg: error.message });
	}
});

module.exports = excelstudents;
