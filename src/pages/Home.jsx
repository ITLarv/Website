import React from "react";
import logo from "../img/logo-red-transparent.png";

export default function Home() {
	return (
		<>
			<div className="firstView">
				<img src={logo} className="logo" alt="logotype" />
				<h1>Hometime</h1>
			</div>
		</>
	);
}
