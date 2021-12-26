import React from "react";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
import axios from "axios";

export default function Bankett() {
	const [uploadFile, setUploadFile] = React.useState();

	const submitForm = (event) => {
		event.preventDefault();

		const dataArray = new FormData();

		// Grab the first file from the filelist.
		const file = uploadFile[0];
		// uploadFile is the header name the python server is looking for
		dataArray.append("uploadFile", file, file.name);

		// Check for file validity, should probably do some more checks
		// to prevent malicious payloads and shit.
		if (!file) {
			alert("Please select a file!");
			return;
		}

		// Make the actual post request to the hardcoded server ip here
		// prettier-ignore
		axios.post("IP HERE", dataArray)
			.then((r) => alert("Succesfully posted your content!"))
			.catch((e) => {
				alert("Failed to upload your file! We are very sorry.");
			});
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
				<input onClick={submitForm} type="submit" />
			</form>
		</div>
	);
}
