import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Fair from "./pages/Fair";
import Prelarv from "./pages/Prelarv";
import Contact from "./pages/Contact";
import Students from "./pages/Students";
import Companies from "./pages/Companies";
import NotFound from "./pages/404";
import "./css/App.min.css";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<div className="Content">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/fair" component={Fair} />
						<Route exact path="/prelarv" component={Prelarv} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/students" component={Students} />
						<Route exact path="/companies" component={Companies} />
						<Route component={NotFound} />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
