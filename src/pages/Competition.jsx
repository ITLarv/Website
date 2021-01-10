import React from "react";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";

export default function Competition() {
	return (
		<div className="ScheduleFair">
			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>LARV-Competition</h1>
				</Parallax>
			</div>

			<p>
				Vi jobbar fortfarande på att fastställa LARV-Competition men så fort det bestäms
				kommer det att läggas upp här.
			</p>
		</div>
	);
}
