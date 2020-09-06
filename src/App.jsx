import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import About from "./pages/AboutLarv.jsx";
import Calendar from "./pages/CalendarPage.jsx";
import Event from "./pages/Event.jsx";
import Fair from "./pages/Fair";
import Gallery from "./pages/Gallery";
import LARVMap from "./pages/Map";
import PrepWeek from "./pages/PrepWeek";
import Contact from "./pages/Contact";
import Students from "./pages/Students";
import Involved from "./pages/Involved";
import IndMeetStudents from "./pages/IndMeetStudents";
import Organizations from "./pages/Organizations";
import IndMeetOrganizations from "./pages/IndMeetOrganizations";
import InitialApplication from "./pages/InitialApplication";
import FinalApplication from "./pages/FinalApplication";
import Catalog from "./pages/Catalog";
import Faq from "./pages/FAQ";
import NotFound from "./pages/404";
import "./css/App.min.css";
import StudentsFAQ from "./content/studentsfaq.json";
import OrganizationsFAQ from "./content/organizationsfaq.json";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<div className="App">
				<Navbar />
				<div className="Content">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/home/about" component={About} />
						<Route exact path="/home/calendar" component={Calendar} />
						<Route exact path="/event" component={Event} />
						<Route exact path="/fair" component={Fair} />
						<Route exact path="/fair/catalog" component={Catalog} />
						<Route exact path="/fair/map" component={LARVMap} />
						<Route exact path="/fair/gallery" component={Gallery} />
						<Route exact path="/prep-week" component={PrepWeek} />
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
						<Route exact path="/organizations" component={Organizations} />
						<Route exact path="/organizations/faq">
							<Faq questions={OrganizationsFAQ} />
						</Route>
						<Route
							exact
							path="/organizations/individual-meetings"
							component={IndMeetOrganizations}
						/>
						<Route
							exact
							path="/organizations/initial-application"
							component={InitialApplication}
						/>
						<Route
							exact
							path="/organizations/final-application"
							component={FinalApplication}
						/>
						<Route component={NotFound} />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
