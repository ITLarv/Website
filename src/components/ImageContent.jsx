import React from "react";
import { useTranslation } from "react-i18next";
import { extractTranslation } from "../HelperFunctions";

export default function ImageContent(props) {
	const { i18n } = useTranslation();
	const lang = i18n.language;
	const title = extractTranslation(props.title, lang);
	const content = extractTranslation(props.content, lang);

	return (
		<div className="NewsItem">
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
