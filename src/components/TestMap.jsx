import React, { useEffect, useState } from "react";
import {
	Map,
	TileLayer,
	Marker,
	Popup,
	LayersControl,
	ImageOverlay,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import shadowIcon from "../img/leaflet-shadow.png";
import icon from "../img/leaflet-icon.png";

const { BaseLayer, Overlay } = LayersControl;

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

const pos1 = [65.61816500515116, 22.14317500591278];
const pos2 = [65.618098547582972, 22.14576065540314];

export default function TestMap() {
	const state = {
		lat: 65.6179119971132,
		lng: 22.141948071363544,
		zoom: 18,
	};
	const position = [state.lat, state.lng];
	const imageOverlayRef = React.createRef();

	const change = (e) => {
		console.log({ e });
	};

	const click = (e) => {
		console.log({ e });
	};
	const [waiting, setWaiting] = useState(true);

	useEffect(() => {
		setTimeout(finishedWaiting(), 500);
		rotateOverlay();
	}, [waiting]);

	const finishedWaiting = () => {
		setWaiting(false);
	};

	const rotateOverlay = () => {
		if (imageOverlayRef.current) {
			const { leafletElement: imageOverlay } = imageOverlayRef.current;
			rotateImage(imageOverlay.getElement(), 35);
		}
	};

	const rotateImage = (image, angle) => {
		image.style.transform = `${image.style.transform} rotateZ(${angle}deg)`;
	};

	return (
		<Map
			center={position}
			zoom={state.zoom}
			onViewportChanged={change}
			onClick={click}
		>
			<LayersControl position="topright">
				<BaseLayer checked name="test1">
					<TileLayer
						attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				</BaseLayer>
				<Overlay name="test2">
					<Marker position={position} icon={customIcon}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</Overlay>
				<Overlay checked name="test3">
					<ImageOverlay
						url={icon}
						bounds={[pos1, pos2]}
						opacity={0.6}
						ref={imageOverlayRef}
					/>
				</Overlay>
			</LayersControl>
		</Map>
	);
}
