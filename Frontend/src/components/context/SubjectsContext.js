import { createContext, useEffect, useState, useRef } from "react";
import axios from "axios";
const SubjectsContext = createContext();

const SubjectsProvider = (props) => {
	const host = process.env.REACT_APP_HOST;
	const [school, setSchool] = useState("");
	const [branch, setBranch] = useState("");
	const [course, setCourse] = useState("");
	const [semester, setSemester] = useState("");
	const [courseCodes, setCourseCodes] = useState({});
	const [subjects, setSubjects] = useState({});

	const currentYear = new Date().getFullYear();
	const [year, setYear] = useState(currentYear);
	const startYear = 2018;
	const yearOptions = [];
	for (let getyear = startYear; getyear <= currentYear; getyear++) {
		const academicYear = `${getyear}-${getyear + 1}`;
		yearOptions.push(academicYear);
	}
	const handleYearChange = (event) => {
		setYear(event.target.value);
	};
	// Define objects to hold dropdown options for each school and branch
	const schoolOptions = {
		"School of Engineering": ["B.Tech"],
		"School of Pharmacy": ["B.Pharm"],
		"School of Science": ["B.Sc", "M.Sc"],
	};

	const branchOptions = {
		"B.Tech": ["Computer Science & Engineering", "Chemical & Biochemical Engineering", "Mechanical Engineering", "Information Technology"],
		"B.Pharm": [],
		"B.Sc": ["Bioscience", "Chemistry"],
		"M.Sc": ["Zoology", "Chemistry", "Microbiology", "Mathematics", "Physics"],
	};

	// Handle changes to the school dropdown
	const handleSchoolChange = (event) => {
		const schoolName = event.target.value;
		setSchool(schoolName);
		setBranch("");
		setCourse("");
	};

	// Handle changes to the branch dropdown
	const handleBranchChange = (event) => {
		const branchName = event.target.value;
		setBranch(branchName);
		setCourse("");
	};

	// Handle changes to the course dropdown
	const handleCourseChange = (event) => {
		try {
			const courseName = event.target.value;
			if (courseName) {
				setCourse(courseName);
				setSemester("");
				setSubjects({});
				courseCodeRef.current.value = "Select Subject First";
				getSubjects(courseName, "");
			}
		} catch (error) {
			return {
				success: false,
				error: error.message,
			};
		}
	};
	// Map the year options to a list of <option> elements
	const yearOptionsList = yearOptions.map((year) => <option key={year}>{year}</option>);

	// Map the school options to a list of <option> elements
	const schoolOptionsList = Object.keys(schoolOptions).map((school) => <option key={school}>{school}</option>);

	// Map the branch options for the selected school to a list of <option> elements
	const branchOptionsList = school && schoolOptions[school] ? schoolOptions[school].map((branch) => <option key={branch}>{branch}</option>) : "";

	// Map the course options for the selected branch to a list of <option> elements
	const courseOptionsList = branch && branchOptions[branch] ? branchOptions[branch].map((course) => <option key={course}>{course}</option>) : "";

	const handleSemesterChange = (event) => {
		const newSemester = event?.target?.value;
		if (newSemester) {
			setSemester(newSemester);
			setSubjects({});
			courseCodeRef.current.value = "Select Subject First";
			getSubjects(newSemester);
		}
	};
	const courseCodeRef = useRef(null);
	const handleSubjectChange = (event) => {
		const subjectId = event.target.value;
		const courseCode = courseCodes[subjectId];
		courseCodeRef.current.value = courseCode;
	};
	const getSubjects = async (semester) => {
		const formData = new FormData();
		formData.append("branch", branch);
		formData.append("school", school);
		formData.append("course", course);
		formData.append("semester", semester);
		try {
			const headers = {
				"auth-token": localStorage.getItem("token"),
			};
			const response = await axios.post(`${host}/api/get/subjects`, formData, { headers });
			if (response.data.success) {
				setCourseCodes(response.data.courseCodes);
				setSubjects(response.data.subjects);
				return {
					success: true,
				};
			} else {
				throw new Error(response.data.msg);
			}
		} catch (error) {
			return {
				success: false,
				error: error.message,
			};
		}
	};
	const subjectRef = useRef(null);
	useEffect(() => {
		const subjectSelect = subjectRef.current;
		if (subjectSelect) {
			const selectedSubjectId = subjectSelect.value;
			const courseCodeInput = document.getElementById("course-code");
			const courseCode = courseCodes[selectedSubjectId];
			courseCodeInput.value = courseCode;
		}
	}, [courseCodes]);
	const contextValue = {
		school,
		branch,
		course,
		year,
		semester,
		courseCodes,
		subjects,
		courseCodeRef,
		setCourse,
		handleSchoolChange,
		handleBranchChange,
		handleCourseChange,
		handleYearChange,
		handleSemesterChange,
		handleSubjectChange,
		yearOptionsList,
		schoolOptionsList,
		branchOptionsList,
		courseOptionsList,
	};
	return <SubjectsContext.Provider value={contextValue}>{props.children}</SubjectsContext.Provider>;
};
export { SubjectsContext, SubjectsProvider };
