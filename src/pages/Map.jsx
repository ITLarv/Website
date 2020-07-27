import React, { useState } from "react";
import MapComponent from "../components/MapComponent.jsx";

export default function LARVMap() {
	const [searchText, setSearchText] = useState("");

	const searchTextChanged = (e) => {
		const text = e.target.value;
		setSearchText(text);
	};

	return (
		<div className="Map">
			<MapComponent className="leaflet" />
			<input type="text" className="textSearch" onChange={searchTextChanged} />
		</div>
	);
}
