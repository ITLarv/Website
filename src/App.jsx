import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import News from "./pages/News.jsx";
import About from "./pages/AboutLarv.jsx";
import Calendar from "./pages/CalendarPage.jsx";
import Event from "./pages/Event.jsx";
import Fair from "./pages/Fair";
import LARVMap from "./pages/Map";
import Prelarv from "./pages/Prelarv";
import AboutPrelarv from "./pages/AboutPrelarv";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Students from "./pages/Students";
import Involved from "./pages/Involved";
import IndMeetStudents from "./pages/IndMeetStudents";
import DatesStudents from "./pages/DatesStudents";
import Companies from "./pages/Companies";
import IndMeetCompanies from "./pages/IndMeetCompanies";
import DatesCompanies from "./pages/DatesCompanies";
import Catalog from "./pages/Catalog";
import Faq from "./pages/FAQ";
import NotFound from "./pages/404";
import "./css/App.min.css";
import StudentsFAQ from "./content/studentsfaq.json";
import CompaniesFAQ from "./content/companiesfaq.json";
// c

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<div className="Content">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/home/news" component={News} />
						<Route exact path="/home/about" component={About} />
						<Route exact path="/home/calendar" component={Calendar} />
						<Route exact path="/event" component={Event} />
						<Route exact path="/fair" component={Fair} />
						<Route exact path="/fair/catalog" component={Catalog} />
						<Route exact path="/fair/map" component={LARVMap} />
						<Route exact path="/prep-week" component={Prelarv} />
						<Route exact path="/prep-week/about" component={AboutPrelarv} />
						<Route exact path="/prep-week/activities" component={Activities} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/students" component={Students} />
						<Route exact path="/students/faq">
							<Faq questions={StudentsFAQ} />
						</Route>
						<Route exact path="/students/involved" component={Involved} />
						<Route
							exact
							path="/students/individual-meetings"
							component={IndMeetStudents}
						/>
						<Route exact path="/students/dates" component={DatesStudents} />
						<Route exact path="/companies" component={Companies} />
						<Route exact path="/companies/faq">
							<Faq questions={CompaniesFAQ} />
						</Route>
						<Route
							exact
							path="/companies/individual-meetings"
							component={IndMeetCompanies}
						/>
						<Route exact path="/companies/dates" component={DatesCompanies} />
						<Route component={NotFound} />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
