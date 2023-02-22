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
					<Route exact path="/" element={isLoggedIn === "63f615906910076fdca5f9f4" ? <Home /> : <Login />} />
					<Route path="/home" element={isLoggedIn === "63f615906910076fdca5f9f4" ? <Home /> : <Login />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
