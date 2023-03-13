const express = require("express");
const Studentdata = require("../models/Studentdata");
const router = express.Router();
const multer = require("multer");
// const fs = require("fs");
const { body, validationResult } = require("express-validator");
const Sem1 = require("../models/Sem1");
const Sem2 = require("../models/Sem2");
const Sem3 = require("../models/Sem3");
const Sem4 = require("../models/Sem4");
const Sem5 = require("../models/Sem5");
const Sem6 = require("../models/Sem6");
const Sem7 = require("../models/Sem7");
const Sem8 = require("../models/Sem8");

//Add data---------------------------------------------------------------------
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
router.post("/addstudentdata", upload.single("IU"), async (req, res) => {
	let user = await Studentdata.findOne({ enrolment: req.body.enrolment });
	if (user) {
		let success = false;
		return res.status(400).json({ success, error: "Sorry a user with this id is already exists" });
	}
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
	let success = true;
	res.json({ success });
});

//Get All data---------------------------------------------------------------------
router.get("/getstudentdata", async (req, res) => {
	try {
		const enrolment = req.body.id;
		const student = await Studentdata.findById(enrolment);
		res.json({ student });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});

//Get data by id---------------------------------------------------------------------
router.get("/getstudentdata/:id", async (req, res) => {
	try {
		const student = await Studentdata.findById(req.params.id);
		res.json(student);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});

//Login---------------------------------------------------------------------
router.post("/loginstudent", [body("enrolment", "Enter valid Enrolment No").exists(), body("password", "Password can not be blank").exists()], async (req, res) => {
	//If there are errors, return bad request
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		let success = false;
		return res.status(400).json({ success, errors: "Please try to login with correct credentials" });
	}
	const { enrolment, password } = req.body;
	try {
		let user = await Studentdata.findOne({ enrolment, password });
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
//Change Password---------------------------------------
router.put("/changepass/:id", async (req, res) => {
	const id = req.params.id;
	const newPass = req.body.newPass;

	const studentdata = await Studentdata.findById(id);
	try {
		if (!studentdata) {
			return res.status(404).send({ error: "User not found" });
		} else {
			studentdata.password = newPass;
			await studentdata.save();
			res.send({ message: "Password updated successfully" });
		}
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

const updateSemester = async (Semester, req, res) => {
	try {
		const { testfirst, testsecond, testfinal, attendance } = req.body;
		let semester = await Semester.findOne({ user: req.params.id });

		if (!semester) {
			semester = new Semester({
				user: req.params.id,
				testfirst,
				testsecond,
				testfinal,
				attendance,
			});
		} else {
			semester.testfirst = testfirst;
			semester.testsecond = testsecond;
			semester.testfinal = testfinal;
			semester.attendance = attendance;
		}

		const updatedSemester = await semester.save();
		res.json(updatedSemester);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
};
router.put("/updatesem1/:id", async (req, res) => {
	await updateSemester(Sem1, req, res);
});
router.put("/updatesem2/:id", async (req, res) => {
	await updateSemester(Sem2, req, res);
});
router.put("/updatesem3/:id", async (req, res) => {
	await updateSemester(Sem3, req, res);
});
router.put("/updatesem4/:id", async (req, res) => {
	await updateSemester(Sem4, req, res);
});
router.put("/updatesem5/:id", async (req, res) => {
	await updateSemester(Sem5, req, res);
});
router.put("/updatesem6/:id", async (req, res) => {
	await updateSemester(Sem6, req, res);
});
router.put("/updatesem7/:id", async (req, res) => {
	await updateSemester(Sem7, req, res);
});
router.put("/updatesem8/:id", async (req, res) => {
	await updateSemester(Sem8, req, res);
});
//Get data sem vise
router.get("/getalldata/semester-1/:id", async (req, res) => {
	try {
		let sem1 = await Sem1.findOne({ user: req.params.id });
		res.json(sem1);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});
router.get("/getalldata/semester-2/:id", async (req, res) => {
	try {
		let sem2 = await Sem2.findOne({ user: req.params.id });
		res.json(sem2);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});
router.get("/getalldata/semester-3/:id", async (req, res) => {
	try {
		let sem3 = await Sem3.findOne({ user: req.params.id });
		res.json(sem3);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});
router.get("/getalldata/semester-4/:id", async (req, res) => {
	try {
		let sem4 = await Sem4.findOne({ user: req.params.id });
		res.json(sem4);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});
router.get("/getalldata/semester-5/:id", async (req, res) => {
	try {
		let sem5 = await Sem5.findOne({ user: req.params.id });
		res.json(sem5);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});
router.get("/getalldata/semester-6/:id", async (req, res) => {
	try {
		let sem6 = await Sem6.findOne({ user: req.params.id });
		res.json(sem6);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});
router.get("/getalldata/semester-7/:id", async (req, res) => {
	try {
		let sem7 = await Sem7.findOne({ user: req.params.id });
		res.json(sem7);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});
router.get("/getalldata/semester-8/:id", async (req, res) => {
	try {
		let sem8 = await Sem8.findOne({ user: req.params.id });
		res.json(sem8);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});

module.exports = router;
