const express = require("express");
const Studentdata = require("../models/Studentdata");
const router = express.Router();
const multer = require("multer");
// const fs = require("fs");

const { body, validationResult } = require("express-validator");
//Add data
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads");
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = req.body.enrolment;
		cb(null, uniqueSuffix + "_" + Date.now() + ".png");
	},
});
const upload = multer({ storage: storage });
router.post("/addstudentdata", upload.single("IU"), (req, res) => {
	const saveData = new Studentdata({
		enrolment: req.body.enrolment,
		dob: req.body.dob,
		name: req.body.name,
		branch: req.body.branch,
		course: req.body.course,
		// img: {
		// 	data: fs.readFileSync("uploads/" + req.file.filename),
		// 	contentType: "image/png",
		// },
		path: req.file.filename,
	});
	saveData
		.save()
		.then((res) => {
			console.log("saved data");
		})
		.catch((err) => {
			console.log(err, "error!!!");
		});
	res.send();
});

//Get All data
router.get("/getstudentdata", async (req, res) => {
	try {
		const enrolment = req.body.id;
		const student = await Studentdata.findById(enrolment);
		res.send(student);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});

//Get data by id
router.get("/getstudentdata/:id", async (req, res) => {
	try {
		const student = await Studentdata.findById(req.params.id);
		res.send(student);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});

//Login
router.post("/loginstudent", [body("enrolment", "Enter valid Enrolment No").exists(), body("dob", "Password can not be blank").exists()], async (req, res) => {
	//If there are errors, return bad request
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		let success = false;
		return res.status(400).json({ success, errors: errors.array() });
	}

	const { enrolment, dob } = req.body;
	try {
		let user = await Studentdata.findOne({ enrolment, dob });
		if (!user) {
			let success = false;
			return res.status(400).json({ success, error: "Please try to login with correct credentials" });
		}
		let success = true;
		res.json({ success, data: user });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});

module.exports = router;
