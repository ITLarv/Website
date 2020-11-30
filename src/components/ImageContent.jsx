import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { extractTranslation } from "../HelperFunctions";
import { useHistory } from "react-router-dom";

export default function ImageContent(props) {
	const { i18n } = useTranslation();
	const lang = i18n.language;
	const title = extractTranslation(props.title, lang);
	const content = extractTranslation(props.content, lang);

	const history = useHistory();

	const handleOnClick = useCallback(() => history.push(props.linkTo), [history, props.linkTo]);

	return (
		<div className="NewsItem" onClick={handleOnClick}>
			<img src={props.image} alt={props.imageAlt} />
			<h2 className="NewsHeader">
				{title.slice(0, 45)}
				{title.length > 45 ? "..." : ""}
			</h2>
			<div className="NewsOverlay">
				<p>
					{content.slice(0, 250)}
					{content.length > 250 ? "..." : ""}
				</p>
			</div>
		</div>
	);
}
