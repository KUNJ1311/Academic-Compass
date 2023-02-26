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

//Get All data
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

//Get data by id
router.get("/getstudentdata/:id", async (req, res) => {
	try {
		const student = await Studentdata.findById(req.params.id);
		res.json(student);
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
		return res.status(400).json({ success, errors: "Please try to login with correct credentials" });
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

router.put("/updatesem1/:id", async (req, res) => {
	try {
		const { testfirst, testsecond, testfinal, attendance } = req.body;
		let sem1 = await Sem1.findOne({ user: req.params.id });

		// If the resource doesn't exist, create a new one
		if (!sem1) {
			sem1 = new Sem1({
				user: req.params.id,
				testfirst,
				testsecond,
				testfinal,
				attendance,
			});
		} else {
			// Otherwise, update the existing resource
			sem1.testfirst = testfirst;
			sem1.testsecond = testsecond;
			sem1.testfinal = testfinal;
			sem1.attendance = attendance;
		}

		const updatedSem1 = await sem1.save();
		res.json(updatedSem1);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});
router.put("/updatesem2/:id", async (req, res) => {
	try {
		const { testfirst, testsecond, testfinal, attendance } = req.body;
		let sem2 = await Sem2.findOne({ user: req.params.id });

		// If the resource doesn't exist, create a new one
		if (!sem2) {
			sem2 = new Sem2({
				user: req.params.id,
				testfirst,
				testsecond,
				testfinal,
				attendance,
			});
		} else {
			// Otherwise, update the existing resource
			sem2.testfirst = testfirst;
			sem2.testsecond = testsecond;
			sem2.testfinal = testfinal;
			sem2.attendance = attendance;
		}

		const updatedSem2 = await sem2.save();
		res.json(updatedSem2);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});
router.put("/updatesem3/:id", async (req, res) => {
	try {
		const { testfirst, testsecond, testfinal, attendance } = req.body;
		let sem3 = await Sem3.findOne({ user: req.params.id });

		// If the resource doesn't exist, create a new one
		if (!sem3) {
			sem3 = new Sem3({
				user: req.params.id,
				testfirst,
				testsecond,
				testfinal,
				attendance,
			});
		} else {
			// Otherwise, update the existing resource
			sem3.testfirst = testfirst;
			sem3.testsecond = testsecond;
			sem3.testfinal = testfinal;
			sem3.attendance = attendance;
		}

		const updatedSem3 = await sem3.save();
		res.json(updatedSem3);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});
router.put("/updatesem4/:id", async (req, res) => {
	try {
		const { testfirst, testsecond, testfinal, attendance } = req.body;
		let sem4 = await Sem4.findOne({ user: req.params.id });

		// If the resource doesn't exist, create a new one
		if (!sem4) {
			sem4 = new Sem4({
				user: req.params.id,
				testfirst,
				testsecond,
				testfinal,
				attendance,
			});
		} else {
			// Otherwise, update the existing resource
			sem4.testfirst = testfirst;
			sem4.testsecond = testsecond;
			sem4.testfinal = testfinal;
			sem4.attendance = attendance;
		}

		const updatedSem4 = await sem4.save();
		res.json(updatedSem4);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});
router.put("/updatesem5/:id", async (req, res) => {
	try {
		const { testfirst, testsecond, testfinal, attendance } = req.body;
		let sem5 = await Sem5.findOne({ user: req.params.id });

		// If the resource doesn't exist, create a new one
		if (!sem5) {
			sem5 = new Sem5({
				user: req.params.id,
				testfirst,
				testsecond,
				testfinal,
				attendance,
			});
		} else {
			// Otherwise, update the existing resource
			sem5.testfirst = testfirst;
			sem5.testsecond = testsecond;
			sem5.testfinal = testfinal;
			sem5.attendance = attendance;
		}

		const updatedSem5 = await sem5.save();
		res.json(updatedSem5);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});
router.put("/updatesem6/:id", async (req, res) => {
	try {
		const { testfirst, testsecond, testfinal, attendance } = req.body;
		let sem6 = await Sem6.findOne({ user: req.params.id });

		// If the resource doesn't exist, create a new one
		if (!sem6) {
			sem6 = new Sem6({
				user: req.params.id,
				testfirst,
				testsecond,
				testfinal,
				attendance,
			});
		} else {
			// Otherwise, update the existing resource
			sem6.testfirst = testfirst;
			sem6.testsecond = testsecond;
			sem6.testfinal = testfinal;
			sem6.attendance = attendance;
		}

		const updatedSem6 = await sem6.save();
		res.json(updatedSem6);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});
router.put("/updatesem7/:id", async (req, res) => {
	try {
		const { testfirst, testsecond, testfinal, attendance } = req.body;
		let sem7 = await Sem7.findOne({ user: req.params.id });

		// If the resource doesn't exist, create a new one
		if (!sem7) {
			sem7 = new Sem7({
				user: req.params.id,
				testfirst,
				testsecond,
				testfinal,
				attendance,
			});
		} else {
			// Otherwise, update the existing resource
			sem7.testfirst = testfirst;
			sem7.testsecond = testsecond;
			sem7.testfinal = testfinal;
			sem7.attendance = attendance;
		}

		const updatedSem7 = await sem7.save();
		res.json(updatedSem7);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});
router.put("/updatesem8/:id", async (req, res) => {
	try {
		const { testfirst, testsecond, testfinal, attendance } = req.body;
		let sem8 = await Sem8.findOne({ user: req.params.id });

		// If the resource doesn't exist, create a new one
		if (!sem8) {
			sem8 = new Sem8({
				user: req.params.id,
				testfirst,
				testsecond,
				testfinal,
				attendance,
			});
		} else {
			// Otherwise, update the existing resource
			sem8.testfirst = testfirst;
			sem8.testsecond = testsecond;
			sem8.testfinal = testfinal;
			sem8.attendance = attendance;
		}

		const updatedSem8 = await sem8.save();
		res.json(updatedSem8);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
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
