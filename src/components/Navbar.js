import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-white-transparent.png";
import { initialApplication, map } from "../config";
import { useTranslation } from "react-i18next";
import sv from "../img/flags/se.png";
import gb from "../img/flags/gb.png";

export default function Navbar() {
	const showIA = initialApplication().navLink;
	const showMap = map().showMap;

	const { t, i18n } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="navbar">
			<NavLink to="/home" activeClassName="">
				<img src={logo} className="logo" alt="logotype" />
			</NavLink>
			<input type="checkbox" id="nav-toggle" className="nav-toggle" />
			<nav>
				<ul className="nav-ul">
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/home">
								{t("NAVBAR.HOME")}
							</NavLink>
							<div className="dropdown-content">
								<ul>
									<li>
										<NavLink exact activeClassName="active" to="/home/about">
											{t("NAVBAR.ABOUT")}
										</NavLink>
									</li>
									<li>
										<NavLink exact activeClassName="active" to="/home/calendar">
											{t("NAVBAR.CALENDAR")}
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/fair">
								{t("NAVBAR.FAIR")}
							</NavLink>
							<div className="dropdown-content">
								<ul>
									{showMap && (
										<li>
											<NavLink exact activeClassName="active" to="/fair/map">
												{t("NAVBAR.MAP")}
											</NavLink>
										</li>
									)}
									<li>
										<NavLink exact activeClassName="active" to="/fair/catalog">
											{t("NAVBAR.CATALOG")}
										</NavLink>
									</li>
									<li>
										<NavLink exact activeClassName="active" to="/fair/gallery">
											{t("NAVBAR.GALLERY")}
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
							{t("NAVBAR.CONTACT")}
						</NavLink>
					</li>
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/students">
								{t("NAVBAR.STUDENTS")}
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
											to="/students/individual-meetings"
										>
											{t("NAVBAR.IM")}
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/involved">
								{t("NAVBAR.GET_INVOLVED")}
							</NavLink>
							<div className="dropdown-content">
								<ul>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/involved/volunteer"
										>
											{t("NAVBAR.VOLUNTEER")}
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/involved/coordinator"
										>
											{t("NAVBAR.COORDINATOR")}
										</NavLink>
									</li>
									<li>
										<NavLink exact activeClassName="active" to="/involved/pg">
											{t("NAVBAR.PG")}
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/organizations">
								{t("NAVBAR.ORGANIZATIONS")}
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
											{t("NAVBAR.IM")}
										</NavLink>
									</li>
									{showIA && (
										<li>
											<NavLink
												exact
												activeClassName="active"
												to="/organizations/initial-application"
											>
												{t("NAVBAR.IA")}
											</NavLink>
										</li>
									)}
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div className="languages">
							<input
								type="image"
								alt="english language"
								src={gb}
								width="32px"
								height="auto"
								onClick={() => changeLanguage("en")}
							/>
							<input
								type="image"
								alt="svenskt språk"
								src={sv}
								width="32px"
								height="auto"
								onClick={() => changeLanguage("sv")}
							/>
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
