import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Fair from "./pages/Fair";
import LARVMap from "./pages/Map";
import Prelarv from "./pages/Prelarv";
import Contact from "./pages/Contact";
import Students from "./pages/Students";
import Companies from "./pages/Companies";
import Catalog from "./pages/Catalog";
import Faq from "./pages/FAQ";
import NotFound from "./pages/404";
import "./css/App.min.css";
import StudentsFAQ from "./content/studentsfaq.json";
import CompaniesFAQ from "./content/companiesfaq.json";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<div className="Content">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/fair" component={Fair} />
						<Route exact path="/fair/catalog" component={Catalog} />
						<Route exact path="/fair/map" component={LARVMap} />
						<Route exact path="/prelarv" component={Prelarv} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/students" component={Students} />
						<Route exact path="/students/faq">
							<Faq questions={StudentsFAQ} />
						</Route>
						<Route exact path="/companies" component={Companies} />
						<Route exact path="/companies/faq">
							<Faq questions={CompaniesFAQ} />
						</Route>
						<Route component={NotFound} />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
