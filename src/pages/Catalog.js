import React from "react";
import JexpoCatalog from "../components/Jexpo/JexpoCatalog.js";

export default function Catalog() {
	return (
		<div className="Catalog">
			<iframe srcDoc={JexpoCatalog} title="Jexpo catalog" />
		</div>
	);
}
