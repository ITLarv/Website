import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

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
		const strippedContent = e?.description?.replace(/<\/?[^>]+>/gi, "");
		let jsonContent;
		try {
			jsonContent = JSON.parse(strippedContent);
		} catch (e) {
			console.log(e);
		}
		setEvent({
			title: e.title,
			description: jsonContent?.text,
			image: jsonContent?.image,
			location: e.location,
			begin: e.begin,
			end: e.end,
		});
	};

	const image = (event) => {
		if (event.image) {
			return <img src={event.image} alt="" width="100%" height="auto" />;
		}
	};

	return (
		<>
			<h1>{event.title}</h1>
			<h2>{event.location}</h2>
			{image(event)}
			<p>{event.description}</p>
		</>
	);
}
