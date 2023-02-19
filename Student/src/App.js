import Home from "./components/Home";
import Login from "./components/Login";
import "./components/login.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	const isLoggedIn = window.localStorage.getItem("loggedIn");
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={isLoggedIn === "true" ? <Home /> : <Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
