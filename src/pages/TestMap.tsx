import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";

type State = {
	lat: number;
	lng: number;
	zoom: number;
};

class TestMap extends Component<{}, State> {
	state = {
		lat: 65.6179119971132,
		lng: 22.141948071363544,
		zoom: 13,
	};

	render() {
		const position = [this.state.lat, this.state.lng];
		return (
			<Map center={position} zoom={this.state.zoom}>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</Map>
		);
	}
}

export default TestMap;
