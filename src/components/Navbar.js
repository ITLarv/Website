import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-white-transparent.png";

export default function Navbar() {
	return (
		<div className="navbar">
			<NavLink to="/home">
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
										<NavLink exact activeClassName="active" to="/home/news">
											News
										</NavLink>
									</li>
									<li>
										<NavLink exact activeClassName="active" to="/home/about">
											About
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
									<li>
										<NavLink exact activeClassName="active" to="/fair/map">
											Map
										</NavLink>
									</li>
									<li>
										<NavLink exact activeClassName="active" to="/fair/catalog">
											Catalog
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/prelarv">
								{/* Prep&nbsp;week */}
								PreLARV
							</NavLink>
							<div className="dropdown-content">
								<ul>
									<li>
										<NavLink exact activeClassName="active" to="/prelarv/about">
											What is PreLARV?
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/prelarv/activities"
										>
											Activities
										</NavLink>
									</li>
								</ul>
							</div>
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
											to="/students/hosts"
										>
											Hosts
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
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/students/dates"
										>
											Dates
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/companies">
								COMPANIES
							</NavLink>
							<div className="dropdown-content">
								<ul>
									<li>
										<NavLink exact activeClassName="active" to="/companies/faq">
											FAQ
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/companies/individual-meetings"
										>
											Individual Meetings
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/companies/dates"
										>
											Dates
										</NavLink>
									</li>
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
