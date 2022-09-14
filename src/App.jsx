import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { devBranch } from "./config";
import "./css/App.min.css";
import Event from "./pages/Event.jsx";
import Navbar from "./components/Navbar";
import Faq from "./pages/FAQ";
import NotFound from "./pages/404";
import Footer from "./components/Footer";
import About from "./pages/AboutLarv.jsx";
import Pricelist from "./pages/Pricelist";
import OrganizationsFAQ from "./content/organizationsfaq.json";
import Fair from "./pages/Fair";
import Home from "./pages/Home.jsx";
import Snapchat from "./pages/Snapchat.jsx";
import ScheduleFair from "./pages/ScheduleFair";
import Students from "./pages/Students";
import Calendar from "./pages/CalendarPage.jsx";
import Coordinator from "./pages/Coordinator";
import PrepWeek from "./pages/PrepWeek"; /* USE THIS WHEN ADDING PAGES WITH GOOGLE FORM */
import Covid19 from "./pages/Covid19";
import GuideGL from "./pages/GuideGL";
import Organizations from "./pages/Organizations";
import StudentsFAQ from "./content/studentsfaq.json";
import Contact from "./pages/Contact";
import Involved from "./pages/Involved";
import InvitationDigital from "./pages/InvitationDigital";
import InvitationInnovation from "./pages/InvitationInnovation";
import IndMeetStudents from "./pages/IndMeetStudents";
import ScrollToTop from "./components/ScrollToTop";
import IAContract from "./pages/IAContract";
import Volunteer from "./pages/Volunteer";
import Competition from "./pages/Competition";
import Catalog from "./pages/Catalog";
import CompanyGuide from "./pages/CompanyVCFGuide";
//import LARVMap from "./pages/Map";
import LARVMap from "./pages/TempMap";
import PG from "./pages/PG";
import GoogleForm from "./pages/GoogleForm";
import Gallery from "./pages/Gallery";
import IndMeetOrganizations from "./pages/IndMeetOrganizations";
import FinalApplication from "./pages/FinalApplication";
import InitialApplication from "./pages/InitialApplication";
import Bankett from "./pages/Bankett";
import Songs from "./pages/Songs";
import Food from "./pages/Food";
import NewDate from "./pages/NewDate";
import EventSchedule from "./pages/EventSchema";
import Schedule from "./pages/schema";
//import { getPositionOfLineAndCharacter } from "typescript";

function DevBranchBanner() {
	if (devBranch().enabled) {
		return (
			<div className="devBranchBanner">
				<p>{devBranch().name}</p>
			</div>
		);
	}
	return null;
}

function Page() {
	return (
		<BrowserRouter>
			<DevBranchBanner />
			<ScrollToTop />
			<div className="App">
				<Navbar />
				<div className="Content">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/snapchat" component={Snapchat} />
						<Route exact path="/home/about" component={About} />
						<Route exact path="/home/calendar" component={Calendar} />
						<Route exact path="/covid" component={Covid19} />
						<Route exact path="/event" component={Event} />
						<Route exact path="/fair" component={Fair} />
						<Route exact path="/fair/catalog" component={Catalog} />
						<Route exact path="/fair/map" component={LARVMap} />
						<Route exact path="/fair/gallery" component={Gallery} />
						<Route exact path="/fair/schedule" component={ScheduleFair} />
						<Route exact path="/lc" component={Competition} />
						<Route exact path="/prep-week" component={PrepWeek} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/students" component={Students} />
						<Route exact path="/gallery" component={Gallery} />
						<Route exact path="/bankett" component={Bankett} />
						<Route exact path="/songs" component={Songs} />
						<Route exact path="/food" component={Food} />
						<Route exact path="/news" component={NewDate} />
						<Route exact path="/eventschedule" component={EventSchedule} />
						<Route exact path="/schedule" component={Schedule} />
						<Route exact path="/students/faq">
							<Faq questions={StudentsFAQ} />
						</Route>

						<Route
							exact
							path="/students/individual-meetings"
							component={IndMeetStudents}
						/>
						<Route exact path="/students/guide" component={GuideGL} />
						<Route exact path="/involved" component={Involved} />
						<Route exact path="/involved/volunteer" component={Volunteer} />

						<Route exact path="/involved/coordinator" component={Coordinator} />
						<Route exact path="/involved/coordinator/application">
							<GoogleForm
								formUrl="https://docs.google.com/forms/d/1oD_sCEa30mrTR0SHUmtT6rMkpOwL8F2qrF24ymC2gpQ/viewform?embedded=true"
								height={1920}
							/>
						</Route>
						<Route exact path="/involved/pg" component={PG} />
						<Route exact path="/involved/pg/application">
							<GoogleForm
								formUrl="https://docs.google.com/forms/d/1Gy17qVed075PFXBHNbsGgsoiNaLIsSVx90botrxFa1c/viewform?embedded=true"
								height={2200}
							/>
						</Route>
						<Route exact path="/quiz">
							<GoogleForm
								// Quiz 1
								formUrl="https://docs.google.com/forms/d/e/1FAIpQLSfcxy-DGvJIqTQylCvb5mV9sssujc0ZxenBk4VvPa0p_4SWAw/viewform?embedded=true"
								height={4300}
								/*
								//Quiz 2
								formUrl="https://docs.google.com/forms/d/e/1FAIpQLSc71R6B9NzBJ2QRpk6DcuNkILehsckf0Y7NmUAHaRB2yVOhZQ/viewform?embedded=true"
								height={6200}
								*/
							/>
						</Route>
						<Route exact path="/onskaforetag">
							<GoogleForm
								formUrl="https://docs.google.com/forms/d/e/1FAIpQLSfX0xdxAL6UvFgkkxZmTc2xDgW0Wrx5Nodr4DfcwXLCaQDrZA/viewform?embedded=true"
								height={600}
							/>
						</Route>
						<Redirect from="/sök" to="/involved/pg/application" />

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
						<Route
							exact
							path="/organizations/LARV_IA_avtal_2023.pdf"
							component={IAContract}
						/>
						<Route
							exact
							path="/organizations/prislista_digital.pdf"
							component={Pricelist}
						/>
						<Route
							exact
							path="/organizations/inbjudan_digital.pdf"
							component={InvitationDigital}
						/>
						<Route
							exact
							path="/organizations/inbjudan_innovation.pdf"
							component={InvitationInnovation}
						/>

						<Route
							exact
							path="/organizations/company_VCF_guide.pdf"
							component={CompanyGuide}
						/>
						<Redirect from="/postbeskrivningar/pg" to="/involved" />
						<Redirect from="/foretag/inledande-anmalan/" to="/organizations" />
						<Redirect
							from="/foretag/kontaktsamtal/"
							to="/organizations/individual-meetings"
						/>
						<Redirect
							from="/foretag/baspaket_och_tillval_2020.pdf"
							to="/organizations/prislista_digital.pdf"
						/>
						<Route component={NotFound} />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

const Loader = () => (
	<div className="App">
		{/* <img src={logo} className="App-logo" alt="logo" /> */}
		<div>loading...</div>
	</div>
);

export default function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Page />
		</Suspense>
	);
}
