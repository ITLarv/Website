import React from "react";
import JexpoCatalog from "../components/Jexpo/JexpoCatalog.js";

export default function Catalog() {
	return (
		<>
			<div className="Catalog">
				<h1>Catalog</h1>
				<p>
					In this catalog you can find information about organizations which has
					previously attended LARV. Each organization is represented by a
					square. By clicking on this square specific information can be found
					regarding the organization, which industry they are active in, which
					types of students they are looking for and what kind of opportunities
					they are offering.
				</p>
				<p>
					The search function at the top of the catalog is also available. You
					can utilize this to find exhibitors which offer a specific type of
					job, are looking for specific types of students or are active within a
					certain industry.
				</p>
				<iframe srcDoc={JexpoCatalog} title="Jexpo catalog" />
			</div>
		</>
	);
}
