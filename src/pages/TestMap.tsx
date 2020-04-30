import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import shadowIcon from "../img/leaflet-shadow.png";
import icon from "../img/leaflet-icon.png";

type State = {
	lat: number;
	lng: number;
	zoom: number;
};

export const customIcon = new L.Icon({
	iconUrl: icon,
	// iconRetinaUrl: "../",
	iconAnchor: [25, 50],
	popupAnchor: [0, -50],
	iconSize: [50, 50],
	shadowUrl: shadowIcon,
	shadowSize: [68, 95],
	shadowAnchor: [20, 92],
});

class TestMap extends Component<{}, State> {
	state = {
		lat: 65.6179119971132,
		lng: 22.141948071363544,
		zoom: 15,
	};

	change = (e) => {
		console.log({ e });
	};

	click = (e) => {
		console.log({ e });
	};

	render() {
		const position = [this.state.lat, this.state.lng];
		return (
			<Map
				center={position}
				zoom={this.state.zoom}
				onViewportChanged={this.change}
				onClick={this.click}
			>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position} icon={customIcon}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</Map>
		);
	}
}

export default TestMap;
