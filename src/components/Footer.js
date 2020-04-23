import React from "react";
import TKLlogo from "../img/tkl-small-white.png";

export default function Footer() {
	return (
		<div className="footer">
			<h3>Teknologkåren</h3>
			<h4>Luleå tekniska universitet</h4>
			<p>971 87 Luleå</p>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://teknologkaren.se"
			>
				<img src={TKLlogo} alt="Teknologkaren logotype" />
			</a>
		</div>
	);
}
