import React from "react";

export default function Dropdown(props) {
	return (
		<details className="dropdown">
			<summary>{props.h}</summary>
			<p>{props.p}</p>
		</details>
	);
}
