import { useState } from "react";
import StudentContext from "./StudentContext";

const StudentState = (props) => {
	const host = "http://localhost:5000";
	const studentsInitial = [];
	const [students, setStudents] = useState(studentsInitial);
	//Get all Students
	const getStudents = async () => {
		//API Call
		const response = await fetch(`${host}/getstudentdata`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
		});
		const json = await response.json();
		setStudents(json);
	};
	return <StudentContext.Provider value={{ getStudents }}>{props.children}</StudentContext.Provider>;
};

export default StudentState;
