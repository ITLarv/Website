import React from "react";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import vakant from "../img/vakant-svart.png";
import pli from "../img/contact/pl.jpg";
// import vice from "../img/vice.png";
// import ftg1 from "../img/ftg1.png";
// import ftg2 from "../img/ftg2.png";
// import event from "../img/event.png";
// import samarbete from "../img/samarbete.png";
// import grafik from "../img/grafik.png";
// import it from "../img/it.png";
// import massbygg from "../img/massbygg.png";
// import logistik from "../img/logistik.png";
// import bankett from "../img/bankett.png";
// import rekrytering from "../img/rekrytering.png";
// import service from "../img/service.png";

export default function Contact() {
	const { t } = useTranslation();

	// prettier-ignore
	const pl = {id:"1", name:"Viktor Centing", role:t("ROLES.PG.PL"), email:"pl@larv.org", phone:"070-686 25 84", imgSrc:pli};

	// prettier-ignore
	const pgList = [
		{id:"2", name:"Peter Panduro", role:t("ROLES.PG.VPL"), email:"viceprojektledare@larv.org", imgSrc:vakant},
		{id:"3", name:"Agnes Elliott", role:t("ROLES.PG.FTG"), email:"anmalan@larv.org", imgSrc:vakant},
		{id:"4", name:"Matilda Segerlund", role:t("ROLES.PG.FTG"), email:"anmalan@larv.org", imgSrc:vakant},
		{id:"5", name:"Hanna Westerberg", role:t("ROLES.PG.EVENT"), email:"event@larv.org", imgSrc:vakant},
		//{id:"6", name:"Vakant", role:"t("ROLES.PG.SAMARBETE"), email:"samarbete@larv.org", imgSrc:vakant},
		{id:"7", name:"Elliot Huber", role:t("ROLES.PG.GRAFIK"), email:"grafiker@larv.org", imgSrc:vakant},
		{id:"8", name:"Tovah Parnes", role:t("ROLES.PG.IT"), email:"it@larv.org", imgSrc:vakant},
		{id:"9", name:"Magnus Stenfelt", role:t("ROLES.PG.MÄSSA"), email:"massbyggnad@larv.org", imgSrc:vakant},
		//{id:"10", name:"Vakant", role:t("ROLES.PG.LOGISTIK"), email:"logistik@larv.org", imgSrc:vakant},
		//{id:"11", name:"Vakant", role:t("ROLES.PG.BANKETT"), email:"bankett@larv.org", imgSrc:vakant},
		{id:"12", name:"Emma Nilsson", role:t("ROLES.PG.REKRYTERING"), email:"rekrytering@larv.org", imgSrc:vakant},
		{id:"13", name:"Martin Östman", role:t("ROLES.PG.SERVICE"), email:"service@larv.org", imgSrc:vakant},
		{id:"14", name:"Victoria Nordmark", role:t("ROLES.PG.PR"), email:"pr@larv.org", imgSrc:vakant}
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
