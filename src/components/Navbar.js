import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-white-transparent.png";
import { initialApplication, map } from "../config";

export default function Navbar() {
	const showIA = initialApplication().navLink;
	const showMap = map().showMap;

	return (
		<div className="navbar">
			<NavLink to="/home" activeClassName="">
				<img src={logo} className="logo" alt="logotype" />
			</NavLink>
			<input type="checkbox" id="nav-toggle" className="nav-toggle" />
			<nav>
				<ul>
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/home">
								HOME
							</NavLink>
							<div className="dropdown-content">
								<ul>
									<li>
										<NavLink exact activeClassName="active" to="/home/about">
											About
										</NavLink>
									</li>
									<li>
										<NavLink exact activeClassName="active" to="/home/calendar">
											Calendar
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/fair">
								FAIR
							</NavLink>
							<div className="dropdown-content">
								<ul>
									{showMap && (
										<li>
											<NavLink exact activeClassName="active" to="/fair/map">
												Map
											</NavLink>
										</li>
									)}
									<li>
										<NavLink exact activeClassName="active" to="/fair/catalog">
											Catalog
										</NavLink>
									</li>
									<li>
										<NavLink exact activeClassName="active" to="/fair/gallery">
											Gallery
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/prep-week">
								{/* Prep&nbsp;week */}
								PREP-WEEK
							</NavLink>
						</div>
					</li>
					<li>
						<NavLink exact activeClassName="active" to="/contact">
							CONTACT
						</NavLink>
					</li>
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/students">
								STUDENTS
							</NavLink>
							<div className="dropdown-content">
								<ul>
									<li>
										<NavLink exact activeClassName="active" to="/students/faq">
											FAQ
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/students/involved"
										>
											Get involved
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/students/individual-meetings"
										>
											Individual Meetings
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/organizations">
								ORGANIZATONS
							</NavLink>
							<div className="dropdown-content">
								<ul>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/organizations/faq"
										>
											FAQ
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/organizations/individual-meetings"
										>
											Individual Meetings
										</NavLink>
									</li>
									{showIA && (
										<li>
											<NavLink
												exact
												activeClassName="active"
												to="/organizations/initial-application"
											>
												Initial Application
											</NavLink>
										</li>
									)}
								</ul>
							</div>
						</div>
					</li>
				</ul>
			</nav>
			<label htmlFor="nav-toggle" className="nav-toggle-label">
				<span></span>
			</label>
		</div>
	);
}
