import React from "react";
//import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
import career_small from "../img/pages/students/career_small.jpg";
import career from "../img/pages/students/career.jpg";
import part_small from "../img/pages/students/part_of_larv_small.jpg";
import part from "../img/pages/students/part_of_larv.jpg";
import arrow from "../img/shit_arrow.png";

export default function Students() {
	const { t } = useTranslation();
	return (
		<div className="Students">
			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("STUDENTS.HEADER")}</h1>
				</Parallax>
			</div>
			<div className="part">
				<div className="become_picture">
					<img src={career_small} alt="" />
				</div>
				<div style={{ backgroundImage: "url(" + career + ")" }} className="flex-container">
					<div className="container_picture1">
						{/* Just space so the text dont take the whole row*/}
					</div>
					<div className="container_text">
						<h1 style={{ padding: "4%" }}>{t("STUDENTS.INFO_1_HEADER")}</h1>
						<p>
							{t("STUDENTS.INFO_1")} {t("STUDENTS.INFO_1_2")}
						</p>

						<a className="link_with_arrow" href="/home/about">
							<p>
								{" "}
								{t("STUDENTS.ARROW")}{" "}
								<img className="arrow_picture" src={arrow} alt="" />{" "}
							</p>
						</a>
					</div>
					<div className="container_picture2">
						{/* Just space so the text dont take the whole row*/}
					</div>
				</div>
			</div>

			<div className="part">
				<div className="become_picture">
					<img src={part_small} alt="" />
				</div>
				<div style={{ backgroundImage: "url(" + part + ")" }} className="flex-container">
					<div className="container_picture1" style={{ width: "10%" }}>
						{/* Just space so the text dont take the whole row*/}
					</div>
					<div className="container_text">
						<h1>{t("GENERAL.GET_INVOLVED")}</h1>
						<p>{t("STUDENTS.INVOLVED")}</p>
						<a className="link_with_arrow" href="/involved">
							<p>
								{" "}
								{t("STUDENTS.ARROW")}{" "}
								<img className="arrow_picture" src={arrow} alt="" />{" "}
							</p>
						</a>
					</div>
					<div className="container_picture2" style={{ width: "50%" }}>
						{/* Just space so the text dont take the whole row*/}
					</div>
				</div>
			</div>
		</div>
	);
}
