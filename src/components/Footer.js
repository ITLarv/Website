import React from "react";
import TKLlogo from "../img/tkl-small-white.png";
import vercel from "../img/vercel.svg";

export default function Footer() {
	return (
		<div className="footer">
			<h3>Teknologkåren</h3>
			<h4>Luleå tekniska universitet</h4>
			<p>971 87 Luleå</p>
			<a target="_blank" rel="noopener noreferrer" href="https://teknologkaren.se">
				<img src={TKLlogo} alt="Teknologkaren logotype" />
			</a>
			<div className="sponsor">
				<p>Powered by</p>
				<a
					href="https://vercel.com?utm_source=larv-website&utm_campaign=oss"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={vercel} alt="Vercel" />
				</a>
			</div>
		</div>
	);
}
