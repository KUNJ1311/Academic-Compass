import Home from "./components/Home";
import Login from "./components/Login";
import "./components/login.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
	const [alert, setAlert] = useState(null);
	const showAlert = (message, type) => {
		setAlert({
			message: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};
	return (
		<>
			<Router>
				<Alert alert={alert} />
				<Routes>
					<Route exact path="/" element={<Login showAlert={showAlert} />} />
					<Route path="/home" element={<Home showAlert={showAlert} />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
