import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup, ImageOverlay } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import transparent from "../img/transparent.png";
import fairArea from "../img/map/fair-area-bkg.png";
import coordinates from "../content/showcase-coordinates.json";

const transparentIcon = new L.icon({
	iconUrl: transparent,
	iconSize: [50, 50],
});

export default function TestMap() {
	const click = (e) => {
		console.info(e.latlng);
	};

	const [allExhibitors, setAllExhibitors] = useState([]);
	const [searchedExhibitors, setSearchedExhibitors] = useState([]);

	useEffect(() => {
		const loadExhibitors = async () => {
			if (allExhibitors.length > 0) return;
			const response = await fetch(
				"https://p18.jexpo.se/larv/exhibitors?getAttributes=true&filter=[%22workspace:2020%22,%22published:true%22]",
			);
			if (response.ok) {
				const json = await response.json();
				const sorted = json.results.sort((a, b) => {
					return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
				});
				setAllExhibitors(sorted);

				//TEMP
				const placedExhibitors = sorted.filter((e) => {
					return e?.profile?.booth;
				});
				setSearchedExhibitors(placedExhibitors);
			} else {
				alert("Fetching exhibitors error");
			}
		};
		loadExhibitors();
	}, [allExhibitors.length]);

	const getCoordinates = (booth) => {
		const c = coordinates[booth];
		const ca = [c.lat, c.lng];
		return ca;
	};

	return (
		<Map center={[65.617721, 22.14452]} zoom={18} onClick={click} maxZoom={21}>
			<TileLayer
				attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<ImageOverlay
				url={fairArea}
				bounds={[
					[65.618571, 22.1426872],
					[65.616855, 22.145657],
				]}
			/>
			{searchedExhibitors.map((exhibitor) => (
				<Marker
					key={exhibitor.id}
					position={getCoordinates(exhibitor.profile.booth)}
					icon={transparentIcon}
				>
					<Popup>{exhibitor.name}</Popup>
				</Marker>
			))}
		</Map>
	);
}
