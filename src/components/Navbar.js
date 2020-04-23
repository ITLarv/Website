import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-white-transparent.png";

export default function Navbar() {
	return (
		<div className="navbar">
			<NavLink to="/">
				<img src={logo} className="logo" alt="logotype" />
			</NavLink>
			<input type="checkbox" id="nav-toggle" className="nav-toggle" />
			<nav>
				<ul>
					<li>
						<NavLink exact activeClassName="active" to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName="active" to="/fair">
							Fair
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName="active" to="/prelarv">
							Prep&nbsp;week
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName="active" to="/contact">
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName="active" to="/students">
							Students
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName="active" to="/companies">
							Companies
						</NavLink>
					</li>
				</ul>
			</nav>
			<label htmlFor="nav-toggle" className="nav-toggle-label">
				<span></span>
			</label>
		</div>
	);
}
