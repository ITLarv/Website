import React, { useState, useEffect } from "react";

export default function Event(props) {
	useEffect(() => {
		init(props);
	}, [props]);

	const [event, setEvent] = useState({});

	const init = (props) => {
		const e = props?.location?.state;
		if (e === undefined) {
			// Handle undefined event
			console.log("Event is undefined");
			return;
		}
		setEvent({
			title: e.title,
			description: e.description,
			location: e.location,
			begin: e.begin,
			end: e.end,
		});
	};

	return (
		<>
			<h1>{event.title}</h1>
			<p>{console.log({ event })}</p>
		</>
	);
}
