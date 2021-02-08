import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-white-transparent.png";
import { initialApplication, map, gallery, calendar } from "../config";
import { useTranslation } from "react-i18next";
import sv from "../img/flags/se.png";
import gb from "../img/flags/gb.png";

export default function Navbar() {
	const showIA = initialApplication().navLink;
	const showMap = map().showMap;
	const showGallery = gallery().show;
	const showCalendar = calendar().show;

	const { t, i18n } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	const [getToggle, setToggle] = useState(false);

	const toggle = (e) => {
		setToggle(e.target.checked);
	};

	const closeNav = () => {
		setToggle(false);
	};

	return (
		<div className="navbar">
			<NavLink to="/home" activeClassName="">
				<img src={logo} className="logo" alt="logotype" />
			</NavLink>
			<input
				type="checkbox"
				id="nav-toggle"
				className="nav-toggle"
				checked={getToggle}
				onChange={(e) => toggle(e)}
			/>
			<nav>
				<ul className="nav-ul">
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/home" onClick={closeNav}>
								{t("NAVBAR.HOME")}
							</NavLink>
							<div className="dropdown-content">
								<ul>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/home/about"
											onClick={closeNav}
										>
											{t("NAVBAR.ABOUT")}
										</NavLink>
									</li>
									{showCalendar && (
										<li>
											<NavLink
												exact
												activeClassName="active"
												to="/home/calendar"
												onClick={closeNav}
											>
												{t("NAVBAR.CALENDAR")}
											</NavLink>
										</li>
									)}
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/fair" onClick={closeNav}>
								{t("NAVBAR.FAIR")}
							</NavLink>
							<div className="dropdown-content">
								<ul>
									{showMap && (
										<li>
											<NavLink
												exact
												activeClassName="active"
												to="/fair/map"
												onClick={closeNav}
											>
												{t("NAVBAR.MAP")}
											</NavLink>
										</li>
									)}
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/covid"
											onClick={closeNav}
										>
											{t("NAVBAR.COVID")}
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/fair/catalog"
											onClick={closeNav}
										>
											{t("NAVBAR.CATALOG")}
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/fair/competition"
											onClick={closeNav}
										>
											LARV-Competition
										</NavLink>
									</li>
									{showGallery && (
										<li>
											<NavLink
												exact
												activeClassName="active"
												to="/fair/gallery"
												onClick={closeNav}
											>
												{t("NAVBAR.GALLERY")}
											</NavLink>
										</li>
									)}
									<NavLink
										exact
										activeClassName="active"
										to="/fair/schedule"
										onClick={closeNav}
									>
										{t("NAVBAR.SCHEDULE")}
									</NavLink>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/prep-week" onClick={closeNav}>
								{/* Prep&nbsp;week */}
								PREP-WEEK
							</NavLink>
						</div>
					</li>
					<li>
						<NavLink exact activeClassName="active" to="/contact" onClick={closeNav}>
							{t("NAVBAR.CONTACT")}
						</NavLink>
					</li>
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/students" onClick={closeNav}>
								{t("NAVBAR.STUDENTS")}
							</NavLink>
							<div className="dropdown-content">
								<ul>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/students/faq"
											onClick={closeNav}
										>
											FAQ
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/students/individual-meetings"
											onClick={closeNav}
										>
											{t("NAVBAR.IM")}
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/students/guide"
											onClick={closeNav}
										>
											{t("NAVBAR.GUIDE")}
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div className="dropdown">
							<NavLink activeClassName="active" to="/involved" onClick={closeNav}>
								{t("NAVBAR.GET_INVOLVED")}
							</NavLink>
							<div className="dropdown-content">
								<ul>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/involved/volunteer"
											onClick={closeNav}
										>
											{t("NAVBAR.VOLUNTEER")}
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/involved/coordinator"
											onClick={closeNav}
										>
											{t("NAVBAR.COORDINATOR")}
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/involved/pg"
											onClick={closeNav}
										>
											{t("NAVBAR.PG")}
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div className="dropdown">
							<NavLink
								activeClassName="active"
								to="/organizations"
								onClick={closeNav}
							>
								{t("NAVBAR.ORGANIZATIONS")}
							</NavLink>
							<div className="dropdown-content">
								<ul>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/organizations/faq"
											onClick={closeNav}
										>
											FAQ
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											activeClassName="active"
											to="/organizations/individual-meetings"
											onClick={closeNav}
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
												onClick={closeNav}
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
								height="21px"
								onClick={() => changeLanguage("en")}
							/>
							<input
								type="image"
								alt="svenskt språk"
								src={sv}
								width="32px"
								height="21px"
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
