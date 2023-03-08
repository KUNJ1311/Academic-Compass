const express = require("express");
const ExamCell = require("../models/ExamCell");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.SECRET;

//ROUTE 1 : Create a examcell using: POST "/api/auth-examcell/createexamcell". No login required
router.post("/createexamcell", [body("name", "Enter valid name").isLength({ min: 2 }), body("email", "Enter valid email").isEmail(), body("password", "Password must be atleast 8 characters").isLength({ min: 8 })], async (req, res) => {
	//If there are errors, return bad request
	let success = false;
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ success, errors: errors.array() });
	}

	//Check whether the examcell with this email exists already
	try {
		let examcell = await ExamCell.findOne({ email: req.body.email });
		if (examcell) {
			let success = false;
			return res.status(400).json({ success, error: "Sorry a examcell with this email is already exists" });
		}

		//Create new examcells
		const salt = await bcrypt.genSalt(10);
		const secPass = await bcrypt.hash(req.body.password, salt);
		examcell = await ExamCell.create({
			name: req.body.name,
			email: req.body.email,
			password: secPass,
		});

		const data = {
			examcell: {
				id: examcell.id,
			},
		};
		const authtoken = jwt.sign(data, JWT_SECRET);
		let success = true;
		res.json({ success, authtoken });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});

//ROUTE 2 : Authenticate a examcell using: POST "/api/auth-examcell/login" no login required
router.post("/login", [body("email", "Enter valid email").isEmail(), body("password", "Password can not be blank").exists()], async (req, res) => {
	//If there are errors, return bad request
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		let success = false;
		return res.status(400).json({ success, errors: errors.array() });
	}

	const { email, password } = req.body;
	try {
		let examcell = await ExamCell.findOne({ email });
		if (!examcell) {
			let success = false;
			return res.status(400).json({ success, error: "Please try to login with correct credentials" });
		}
		const passwordCompare = await bcrypt.compare(password, examcell.password);
		if (!passwordCompare) {
			let success = false;
			return res.status(400).json({ success, error: "Please try to login with correct credentials" });
		}
		const data = {
			examcell: {
				id: examcell.id,
			},
		};
		const authtoken = jwt.sign(data, JWT_SECRET);
		let success = true;
		res.json({ success, authtoken });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});
module.exports = router;
