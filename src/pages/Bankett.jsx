import React from "react";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
import axios from "axios";

export default function Bankett() {
	const [uploadFile, setUploadFile] = React.useState();

	const submitForm = (event) => {
		event.preventDefault();

		const dataArray = new FormData();
		dataArray.append("uploadFile", uploadFile);

		if (!uploadFile) {
			alert("Please select a file!");
			return;
		}

		axios.post("");
	};

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
			<form onSubmit={submitForm}>
				<input type="file" onChange={(e) => setUploadFile(e.target.files)} />
				<br />
				<input type="submit" />
			</form>
		</div>
	);
}
