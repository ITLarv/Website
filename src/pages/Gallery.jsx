import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
//import Gallery from "react-photo-gallery";
import photo1 from "../img/misc/rsz_1massan-131.jpg";
import photo2 from "../img/misc/rsz_massan-001.jpg";
import photo3 from "../img/misc/rsz_massan-005.jpg";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
import { render } from "@testing-library/react";

const slider = (
	<AwesomeSlider>
		<div data-src={photo1} />
		<div data-src={photo2} />
		<div data-src={photo3} />
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
			<h1>Överblick av bilderna</h1>
			<div className="galleryOverView">
				<img src={photo1} />
				<img src={photo2} />
				<img src={photo3} />
			</div>
		</div>
	);
}
