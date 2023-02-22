import Home from "./components/Home";
import Login from "./components/Login";
import "./components/login.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	const isLoggedIn = window.localStorage.getItem("key");
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={isLoggedIn === "63f5ab8eb2639f74e48411f9" ? <Home /> : <Login />} />
					<Route path="/home" element={isLoggedIn === "63f5ab8eb2639f74e48411f9" ? <Home /> : <Login />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
