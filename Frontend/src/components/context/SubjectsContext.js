import { createContext, useState } from "react";

const SubjectsContext = createContext();

const SubjectsProvider = (props) => {
	const [school, setSchool] = useState("");
	const [branch, setBranch] = useState("");
	const [course, setCourse] = useState("");
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
		const courseName = event.target.value;
		setCourse(courseName);
	};

	// Map the school options to a list of <option> elements
	const schoolOptionsList = Object.keys(schoolOptions).map((school) => <option key={school}>{school}</option>);

	// Map the branch options for the selected school to a list of <option> elements
	const branchOptionsList = school && schoolOptions[school] ? schoolOptions[school].map((branch) => <option key={branch}>{branch}</option>) : "";

	// Map the course options for the selected branch to a list of <option> elements
	const courseOptionsList = branch && branchOptions[branch] ? branchOptions[branch].map((course) => <option key={course}>{course}</option>) : "";
	const contextValue = {
		school,
		branch,
		course,
		handleSchoolChange,
		handleBranchChange,
		handleCourseChange,
		schoolOptionsList,
		branchOptionsList,
		courseOptionsList,
	};

	return <SubjectsContext.Provider value={contextValue}>{props.children}</SubjectsContext.Provider>;
};
export { SubjectsContext, SubjectsProvider };
