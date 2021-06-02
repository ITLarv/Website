// Right now when adding pictures there are one place for the slider and another for the overview...

import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import photo1 from "../img/misc/rsz_1massan-131.jpg";
import photo2 from "../img/misc/rsz_massan-001.jpg";
import photo3 from "../img/misc/rsz_massan-005.jpg";
import photo4 from "../img/misc/rsz_bankett-006.jpg";
import photo5 from "../img/misc/rsz_lunch-2.jpg";
import photo6 from "../img/misc/rsz_massan-006.jpg";
import photo7 from "../img/misc/rsz_massan-121-fav.jpg";
import photo8 from "../img/misc/rsz_massan-123.jpg";
import photo9 from "../img/misc/rsz_massan-122.jpg";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";

const slider = (
	<AwesomeSlider>
		<div data-src={photo1} />
		<div data-src={photo2} />
		<div data-src={photo3} />
		<div data-src={photo4} />
		<div data-src={photo5} />
		<div data-src={photo6} />
		<div data-src={photo7} />
		<div data-src={photo8} />
		<div data-src={photo9} />
	</AwesomeSlider>
);

export default function Gallery() {
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
					<h1>Gallery</h1>
				</Parallax>
			</div>
			<div className="gallerySlider">{slider}</div>
			<p></p>
			<p></p>
			<h1>Overview</h1>
			<div className="galleryOverView">
				<img src={photo1} alt="" />
				<img src={photo2} alt="" />
				<img src={photo3} alt="" />
				<img src={photo4} alt="" />
				<img src={photo5} alt="" />
				<img src={photo6} alt="" />
				<img src={photo7} alt="" />
				<img src={photo8} alt="" />
				<img src={photo9} alt="" />
			</div>
		</div>
	);
}
