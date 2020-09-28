import React from "react";

export default function GoogleForm(props) {
	return (
		<div className="iframe-container">
			<iframe
				title="google-form"
				src={props.formUrl}
				width="640"
				height={props.height}
				frameborder="0"
				marginheight="0"
				marginwidth="0"
			>
				Loading ...
			</iframe>
		</div>
	);
}
