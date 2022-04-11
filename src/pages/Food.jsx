import React from "react";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";

export default function Food() {
	return (
		<div className="content">
			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>Food</h1>
				</Parallax>
			</div>
			<div className="food_div">
				<h3>Meny för kvällen:</h3>
				<i>Specialkost i kursiv stil.</i>
				<h4 className="food_text">
					<b>Förrätt:</b> Hummersoppa
					<br></br>
					<i>Svampsoppa</i>
				</h4>
				<h4 className="food_text">
					<b>Varmrätt:</b> Laxfilé med västerbottenssås och potatisbakelse.
					<br></br>
					<i>KYCKLING ELLER VEGBIFF med västerbottensås och potatisbakelse.</i>
				</h4>
				<h4 className="food_text">
					<b>Efterrätt:</b> Citroncheescake inkl kaffe.
				</h4>

				<br></br>
				<h5 className="food_text">Tack till:</h5>
				<h5 className="food_text">LARV-CREW</h5>
				<h5 className="food_text">Alla involverade företag</h5>
				<h5 className="food_text">STUK</h5>
			</div>
		</div>
	);
}
