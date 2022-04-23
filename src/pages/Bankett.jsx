import React from "react";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
import axios from "axios";

export default function Bankett() {
	const [uploadFile, setUploadFile] = React.useState();

	const submitForm = (event) => {
		event.preventDefault();

		const dataArray = new FormData();

		// Error check for not selecting a file!
		if (typeof uploadFile === "undefined") {
			alert("Please select a file!");
			return;
		}

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
		// FIXME: Doesnt recieve 400 errors
		// prettier-ignore
		axios.post("http://92.32.116.2:59595", dataArray, { "headers" : { "Access-Control-Allow-Origin" : "*"}})
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
					<h1>Bankett</h1>
				</Parallax>
			</div>

			<a href="/food/" className="_anchor">
				FOOD
			</a>
			<a href="/songs/" className="_anchor">
				SONGS
			</a>
			<form className="_form" onSubmit={submitForm}>
				<h4>Upload images here!</h4>
				<input type="file" onChange={(e) => setUploadFile(e.target.files)} />
				<input onClick={submitForm} type="submit" value="Submit" />
			</form>
		</div>
	);
}
