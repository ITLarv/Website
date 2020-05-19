import React from "react";
import { Map, TileLayer, Marker, Popup, ImageOverlay } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import shadowIcon from "../img/leaflet-shadow.png";
import icon from "../img/leaflet-icon.png";
import fairArea from "../img/map/fair-area.png";

const customIcon = new L.Icon({
	iconUrl: icon,
	// iconRetinaUrl: "../",
	iconAnchor: [25, 50],
	popupAnchor: [0, -50],
	iconSize: [50, 50],
	shadowUrl: shadowIcon,
	shadowSize: [68, 95],
	shadowAnchor: [20, 92],
});

export default function TestMap() {
	const click = (e) => {
		console.log({ e });
	};

	let annotations = [
		{
			position: [65.617721, 22.14452],
			popup: "A pretty CSS3 popup.",
		},
	];

	return (
		<Map center={[65.617721, 22.14452]} zoom={18} onClick={click} maxZoom={20}>
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
			{annotations.map((annotation) => (
				<Marker position={annotation.position} icon={customIcon}>
					<Popup>{annotation.popup}</Popup>
				</Marker>
			))}
		</Map>
	);
}
