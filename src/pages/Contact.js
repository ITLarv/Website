import React from "react";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
//import vakant from "../img/vakant-svart.png";
import pli from "../img/contact/pl.jpg";
//import vice from "../img/contact/vice.jpg";
import ftg1 from "../img/contact/ftg1.jpg";
//import ftg2 from "../img/contact/ftg2.jpg";
import event from "../img/contact/event.jpg";
//import samarbete from "../img/samarbete.png";
import grafik from "../img/contact/grafik.jpg";
import it from "../img/contact/it.jpg";
//import massbygg from "../img/contact/massbygg.jpg";
//import logistik from "../img/logistik.png";
//import bankett from "../img/bankett.png";
import rekrytering from "../img/contact/rekrytering.jpg";
//import service from "../img/contact/service.jpg";
//import marknad from "../img/contact/marknad.jpg";
import vakant from "../img/contact/vakant.png";

export default function Contact() {
	const { t } = useTranslation();

	// prettier-ignore
	const pl = {id:"1", name:"Viktor Centing", role:t("ROLES.PG.PL"), email:"pl@larv.org", phone:"070-686 25 84", imgSrc:pli};

	// prettier-ignore
	const pgList = [
		{id:"2", name:"Simon Johansson", role:t("ROLES.PG.VPL"), email:"viceprojektledare@larv.org", imgSrc:vakant},
		{id:"3", name:"Fabian Kroner", role:t("ROLES.PG.FTG"), email:"anmalan@larv.org", imgSrc:ftg1},
		{id:"4", name:"Rasmus Olsson", role:t("ROLES.PG.FTG"), email:"anmalan@larv.org", imgSrc:vakant},
		{id:"5", name:"Karlo Ravlic", role:t("ROLES.PG.EVENT"), email:"event@larv.org", imgSrc:event},
		{id:"6", name:"Vakant", role:t("ROLES.PG.SAMARBETE"), email:"samarbete@larv.org", imgSrc:vakant},
		{id:"7", name:"Hanna Wall", role:t("ROLES.PG.GRAFIK"), email:"grafiker@larv.org", imgSrc:grafik},
		{id:"8", name:"Leo Hemmingsson", role:t("ROLES.PG.IT"), email:"it@larv.org", imgSrc:it},
		{id:"9", name:"Vakant", role:t("ROLES.PG.MÄSSA"), email:"massbyggnad@larv.org", imgSrc:vakant},
		{id:"10", name:"Vakant", role:t("ROLES.PG.LOGISTIK"), email:"logistik@larv.org", imgSrc:vakant},
		{id:"11", name:"Vakant", role:t("ROLES.PG.BANKETT"), email:"bankett@larv.org", imgSrc:vakant},
		{id:"12", name:"Marcus Garplid", role:t("ROLES.PG.REKRYTERING"), email:"rekrytering@larv.org", imgSrc:rekrytering},
		{id:"13", name:"Vakant", role:t("ROLES.PG.SERVICE"), email:"service@larv.org", imgSrc:vakant},
		{id:"14", name:"Vakant", role:t("ROLES.PG.PR"), email:"pr@larv.org", imgSrc:vakant}
	];

	return (
		<div className="Contact">
			<div className="pg">
				<div className="Person">
					<img src={pl.imgSrc} alt="" />
					<h4>{pl.name}</h4>
					<p className="role">{pl.role}</p>
					<a href={"mailto:" + pl.email} className="serif">
						{pl.email}
					</a>
					<div className="phone">
						<FontAwesomeIcon icon={faPhoneAlt} className="icon" />
						<p className="serif">{pl.phone}</p>
					</div>
				</div>
			</div>
			<div className="pg">
				{pgList.map((person) => (
					<div className="Person" key={person.id}>
						<img src={person.imgSrc} alt="" />
						<h4>{person.name}</h4>
						<p className="role">{person.role}</p>
						<a href={"mailto:" + person.email} className="serif">
							{person.email}
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
