import React, { useState, useEffect } from "react";
import { history, useHistory } from "react-router-dom";

export default function Event(props) {
	useEffect(() => {
		init(props);
	}, [props]);

	const history = useHistory();
	const [event, setEvent] = useState({});

	const init = (props) => {
		const url = props?.location?.state?.url;
		console.log({ url });
		const e = props?.location?.state;
		if (e === undefined) {
			// Handle undefined event
			console.log("Event is undefined");
			history.push("/");
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
			<h2>{event.location}</h2>
			<p>{event.description}</p>
		</>
	);
}
