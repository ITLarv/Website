import React, { useState } from "react";
import TestMap from "../components/TestMap.jsx";

export default function LARVMap() {
	const [searchText, setSearchText] = useState("");

	const searchTextChanged = (e) => {
		const text = e.target.value;
		setSearchText(text);
	};

	return (
		<div className="Map">
			<TestMap className="leaflet" />
			<input type="text" className="textSearch" onChange={searchTextChanged} />
		</div>
	);
}
