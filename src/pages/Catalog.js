/* eslint-disable no-undef */
import React from "react";
import { catalog } from "../config";
import { useTranslation } from "react-i18next";

export default function Catalog() {
	const { t } = useTranslation();
	const showCatalog = catalog().show;
	const currentYear = catalog().currentYear;

	React.useEffect(() => {
		Jexpo.init(
			{
				lang: "sv",
				endpoint: "p18.jexpo.se/larv",
			},
			function () {
				Jexpo.dialog("app-dialog");
				Jexpo.ExhibitorsCatalogue("app", {
					workspace: "2022",
					search: [
						"name",
						"profile.weOffer",
						"profile.industry",
						"profile.desiredProgramme",
					],
					filter: ["published:true"],
				});
			},
		);
		console.info({ window });
	}, []);

	const renderCatalog = () => {
		if (showCatalog) {
			return (
				<div>
					<div id="app" className="jexpo jexpo-forms" style={{ padding: "20px" }}></div>
					<div id="app-dialog" className="jexpo jexpo-forms"></div>
				</div>
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
			<div>
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
