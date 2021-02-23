import React from "react";
import JexpoCatalog from "../components/Jexpo/JexpoCatalog.js";
import { catalog } from "../config";
import { useTranslation } from "react-i18next";

export default function Catalog() {
	const { t } = useTranslation();
	const showCatalog = catalog().show;
	const currentYear = catalog().currentYear;

	const renderCatalog = () => {
		if (showCatalog) {
			return (
				<>
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
				<div className="grey">
					<h1>{t("GENERAL.CATALOG")}</h1>
					<p>{t("CATALOG.INFO")}</p>
					{!currentYear && <p>{t("CATALOG.NOT_CURRENT_YEAR")}</p>}
					<p>{t("CATALOG.SEARCH")}</p>
				</div>
				{renderCatalog()}
			</div>
		</>
	);
}
