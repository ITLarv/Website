import React from "react";
import JexpoCatalog from "../components/Jexpo/JexpoCatalog.js";
import { catalog } from "../config";

export default function Catalog() {
	const showCatalog = catalog().show;
	const currentYear = catalog().currentYear;

	const renderCatalog = () => {
		if (showCatalog) {
			return (
				<>
					<p>
						In this catalog you can find information about organizations which
						has previously attended LARV. Each organization is represented by a
						square. By clicking on this square specific information can be found
						regarding the organization, which industry they are active in, which
						types of students they are looking for and what kind of
						opportunities they are offering.
					</p>
					{!currentYear && (
						<p>
							The catalog for LARV2021 is not yet published, but please have a
							look at last years attending companies.
						</p>
					)}
					<p>
						The search function at the top of the catalog is also available. You
						can utilize this to find exhibitors which offer a specific type of
						job, are looking for specific types of students or are active within
						a certain industry.
					</p>
					<div className="jexpoCatalog">
						<iframe srcDoc={JexpoCatalog} title="Jexpo catalog" />
					</div>
				</>
			);
		}
		/*return (
			<p>
				Soon you will find this years attending companies here. We'll make sure
				to add a timer for that
			</p>
		);*/
	};

	return (
		<>
			<div className="Catalog">
				<h1>Catalog</h1>
				{renderCatalog()}
			</div>
		</>
	);
}
