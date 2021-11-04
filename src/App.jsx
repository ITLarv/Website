import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { devBranch } from "./config";
import "./css/App.min.css";
const Event = React.lazy(() => import("./pages/Event.jsx"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Faq = React.lazy(() => import("./pages/FAQ"));
const NotFound = React.lazy(() => import("./pages/404"));
const Footer = React.lazy(() => import("./components/Footer"));
const About = React.lazy(() => import("./pages/AboutLarv.jsx"));
const Pricelist = React.lazy(() => import("./pages/Pricelist"));
const OrganizationsFAQ = React.lazy(() => import("./content/organizationsfaq.json"));
const Fair = React.lazy(() => import("./pages/Fair"));
const Home = React.lazy(() => import("./pages/Home.jsx"));
const Snapchat = React.lazy(() => import("./pages/Snapchat.jsx"));
const ScheduleFair = React.lazy(() => import("./pages/ScheduleFair"));
const Students = React.lazy(() => import("./pages/Students"));
const Calendar = React.lazy(() => import("./pages/CalendarPage.jsx"));
const Coordinator = React.lazy(() => import("./pages/Coordinator"));
const PrepWeek = React.lazy(() =>
	import("./pages/PrepWeek"),
); /* USE THIS WHEN ADDING PAGES WITH GOOGLE FORM */
const Covid19 = React.lazy(() => import("./pages/Covid19"));
const GuideGL = React.lazy(() => import("./pages/GuideGL"));
const Organizations = React.lazy(() => import("./pages/Organizations"));
const StudentsFAQ = React.lazy(() => import("./content/studentsfaq.json"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Involved = React.lazy(() => import("./pages/Involved"));
const InvitationDigital = React.lazy(() => import("./pages/InvitationDigital"));
const InvitationInnovation = React.lazy(() => import("./pages/InvitationInnovation"));
const IndMeetStudents = React.lazy(() => import("./pages/IndMeetStudents"));
const ScrollToTop = React.lazy(() => import("./components/ScrollToTop"));
const IAContract = React.lazy(() => import("./pages/IAContract"));
const Volunteer = React.lazy(() => import("./pages/Volunteer"));
const Competition = React.lazy(() => import("./pages/Competition"));
const Catalog = React.lazy(() => import("./pages/Catalog"));
const CompanyGuide = React.lazy(() => import("./pages/CompanyVCFGuide"));
const LARVMap = React.lazy(() => import("./pages/Map"));
const PG = React.lazy(() => import("./pages/PG"));
const GoogleForm = React.lazy(() => import("./pages/GoogleForm"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const IndMeetOrganizations = React.lazy(() => import("./pages/IndMeetOrganizations"));
const FinalApplication = React.lazy(() => import("./pages/FinalApplication"));
const InitialApplication = React.lazy(() => import("./pages/InitialApplication"));

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
						<Route exact path="/fair/competition" component={Competition} />
						<Route exact path="/prep-week" component={PrepWeek} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/students" component={Students} />
						<Route exact path="/gallery" component={Gallery} />
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
								formUrl="https://docs.google.com/forms/d/1YeNBJyOzbC8jXa1LmVBS-MnBvjSGjpEkGvgN4feYxt8/viewform?embedded=true"
								height={1920}
							/>
						</Route>
						<Route exact path="/involved/pg" component={PG} />
						<Route exact path="/involved/pg/application">
							<GoogleForm
								formUrl="https://docs.google.com/forms/d/e/1FAIpQLScGeAb_9tf5TOMwqRzi5OTUcLFH-Lf6-awwwIRzUAlmTt9VPg/viewform?embedded=true"
								height={2200}
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
							path="/organizations/LARV_IA_avtal_2022.pdf"
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
