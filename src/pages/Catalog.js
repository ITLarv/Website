import React from "react";
import JexpoCatalog from "../components/Jexpo/JexpoCatalog.js";

export default function Catalog() {
	return (
		<>
			<div className="Catalog">
				<h1>Catalog</h1>
				<p>
					Here are all the companies to work with LARV 2021. Please use the
					seach function to search for your favorite companie or filter the
					companies by what they offer, what programs they are looking for and
					their branch.
				</p>
				<iframe srcDoc={JexpoCatalog} title="Jexpo catalog" />
			</div>
		</>
	);
}
