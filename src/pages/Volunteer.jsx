import React from "react";
//import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
import { VolunteerApplication } from "../config";
import Dropdown from "./Dropdown";

/* eslint-disable no-undef */
export default function Volunteer() {
	const ApplicationOpen = VolunteerApplication().open;
	const { t } = useTranslation();

	Jexpo.init(
		{
			lang: "sv",
			endpoint: "p18.jexpo.se/larv",
		},
		function () {
			Jexpo.dialog("app-dialog");
			Jexpo.RecruitmentsApplication("app", { workspace: "rekrytering-2022" });
		},
		[],
	);

	return (
		<>
			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("VOLUNTEERS.HEADER")}</h1>
				</Parallax>
			</div>

			{ApplicationOpen && (
				<div style={{ display: "flex", justifyContent: "center" }}>
					<div
						style={{
							padding: "4%",
							scale: "3",
						}}
					>
						<div id="app" class="jexpo jexpo-forms"></div>
						<div id="app-dialog" class="jexpo jexpo-forms"></div>
						<script
							type="text/javascript"
							src="https://storage.googleapis.com/jexpo-cdn/vendor-v18.min.js"
						></script>
						<script
							type="text/javascript"
							src="https://storage.googleapis.com/jexpo-cdn/plugins-v18.min.js"
						></script>
						<script></script>
					</div>
				</div>
			)}

			<div className="grey">
				<p>{t("VOLUNTEERS.INFO_1")}</p>
				<p>{t("VOLUNTEERS.INFO_2")}.</p>
			</div>

			<div className="dropdown-container">
				<h1>{t("VOLUNTEERS.POSITIONS")}</h1>
				<Dropdown h={t("ROLES.VOLUNTEERS.BANQUET")} p={t("VOLUNTEERS.BANQUET")} />
				<Dropdown h={t("ROLES.VOLUNTEERS.CHAUFFÖR")} p={t("VOLUNTEERS.CHAUFFÖR")} />
				<Dropdown h={t("ROLES.VOLUNTEERS.FTG")} p={t("VOLUNTEERS.FTG")} />
				<Dropdown h={t("ROLES.VOLUNTEERS.LOGISTICS")} p={t("VOLUNTEERS.LOGISTICS")} />
				<Dropdown h={t("ROLES.VOLUNTEERS.LOUNGE")} p={t("VOLUNTEERS.LOUNGE")} />
				<Dropdown h={t("ROLES.VOLUNTEERS.MÄSSA")} p={t("VOLUNTEERS.MÄSSA")} />
				<Dropdown h={t("ROLES.VOLUNTEERS.NATT")} p={t("VOLUNTEERS.NATT")} />
				<Dropdown h={t("ROLES.VOLUNTEERS.RECEPTION")} p={t("VOLUNTEERS.RECEPTION")} />
				<Dropdown h={t("ROLES.VOLUNTEERS.TI")} p={t("VOLUNTEERS.TI")} />
			</div>
		</>
	);
}
