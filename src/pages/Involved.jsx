import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";

export default function Involved() {
	const { t } = useTranslation();
	return (
		<>
			<div className="involved">
				<div className="banner">
					<Parallax
						className="parallax"
						blur={0}
						bgImage={bgImage}
						bgImageAlt=""
						strength={300}
					>
						<h1>{t("GET_INVOLVED.HEADER")}</h1>
					</Parallax>
				</div>

				<div className="grey">
					<p>{t("GET_INVOLVED.INFO_1")}</p>
					{/*<p>{t("GET_INVOLVED.INFO_2")}</p>*/}
				</div>

				<div class="benefits">
					<h1 class="header">{t("GET_INVOLVED.HEADER_BENEFITS")}</h1>

					<table class="benefit_table">
						<tr>
							<th class="top">{t("GET_INVOLVED.HEADER_BENEFITS")}</th>
							<th class="top">{t("GENERAL.VOLUNTEER")}</th>
							<th class="top">{t("GENERAL.COORDINATOR")}</th>
							<th class="top">{t("GENERAL.PG")}</th>
						</tr>
						<tr>
							<th class="table_header">{t("BENEFITS_TABLE.COL_1")}</th>
							<th>x</th>
							<th>x</th>
							<th>x</th>
						</tr>
						<tr>
							<th class="table_header">{t("BENEFITS_TABLE.COL_2")}</th>
							<th>x</th>
							<th>x</th>
							<th>x</th>
						</tr>
						<tr>
							<th class="table_header">{t("BENEFITS_TABLE.COL_3")}</th>
							<th>x</th>
							<th>x</th>
							<th>x</th>
						</tr>
						<tr>
							<th class="table_header">{t("BENEFITS_TABLE.COL_4")}</th>
							<th>x</th>
							<th>x</th>
							<th>x</th>
						</tr>
						<tr>
							<th class="table_header">{t("BENEFITS_TABLE.COL_5")}</th>
							<th>x</th>
							<th>x</th>
							<th>x</th>
						</tr>
						<tr>
							<th class="table_header">{t("BENEFITS_TABLE.COL_6")}</th>
							<th>x</th>
							<th>x</th>
							<th>x</th>
						</tr>
						<tr>
							<th class="table_header">{t("BENEFITS_TABLE.COL_7")}</th>
							<th>x</th>
							<th>x</th>
							<th>x</th>
						</tr>
						<tr>
							<th class="table_header">{t("BENEFITS_TABLE.COL_8")}</th>
							<th>x</th>
							<th>x</th>
							<th>x</th>
						</tr>
						<tr>
							<th class="table_header">{t("BENEFITS_TABLE.COL_9")}</th>
							<th></th>
							<th>x</th>
							<th>x</th>
						</tr>
						<tr>
							<th class="table_header">{t("BENEFITS_TABLE.COL_10")}</th>
							<th></th>
							<th>x</th>
							<th>x</th>
						</tr>
						<tr>
							<th class="table_header">{t("BENEFITS_TABLE.COL_11")}</th>
							<th></th>
							<th>x</th>
							<th>x</th>
						</tr>
						<tr>
							<th class="table_header">{t("BENEFITS_TABLE.COL_12")}</th>
							<th></th>
							<th></th>
							<th>x</th>
						</tr>
						<tr>
							<th class="table_header">{t("BENEFITS_TABLE.COL_13")}</th>
							<th></th>
							<th></th>
							<th>x</th>
						</tr>
						<tr>
							<th class="table_header">{t("BENEFITS_TABLE.COL_14")}</th>
							<th></th>
							<th></th>
							<th>x</th>
						</tr>
					</table>
				</div>

				<div className="ButtonDiv">
					<NavLink className="button" to="/involved/volunteer">
						{t("GENERAL.VOLUNTEER")}
					</NavLink>
					<NavLink className="button" to="/involved/coordinator">
						{t("GENERAL.COORDINATOR")}
					</NavLink>
					<NavLink className="button" to="/involved/pg">
						{t("GENERAL.PG")}
					</NavLink>
				</div>
			</div>
		</>
	);
}
