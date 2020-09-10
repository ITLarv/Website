import React, { useState } from "react";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vakant from "../img/vakant.png";
// import pli from "../img/pl.png";
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
	// prettier-ignore
	const pl = {id:"1", name:"Viktor Centing", role:"Projektledare", email:"pl@larv.org", phone:"070-686 25 84", imgSrc:vakant};

	// prettier-ignore
	const [pgList] = useState([
    {id:"2", name:"Peter Panduro", role:"Vice Projektledare", email:"viceprojektledare@larv.org", imgSrc:vakant},
    {id:"3", name:"Agnes Elliott", role:"Företagsansvarig", email:"anmalan@larv.org", imgSrc:vakant},
    {id:"4", name:"Matilda Segerlund", role:"Företagsansvarig", email:"anmalan@larv.org", imgSrc:vakant},
    {id:"5", name:"Vakant", role:"Eventansvarig", email:"event@larv.org", imgSrc:vakant},
    {id:"6", name:"Vakant", role:"Samarbetsansvarig", email:"samarbete@larv.org", imgSrc:vakant},
    {id:"7", name:"Elliot Huber", role:"Grafikansvarig", email:"grafiker@larv.org", imgSrc:vakant},
    {id:"8", name:"Tovah Parnes", role:"IT-ansvarig", email:"it@larv.org", imgSrc:vakant},
    {id:"9", name:"Magnus Stenfelt", role:"Mässbyggnadsansvarig", email:"massbyggnad@larv.org", imgSrc:vakant},
    {id:"10", name:"Vakant", role:"Logistikansvarig", email:"logistik@larv.org", imgSrc:vakant},
    {id:"11", name:"Vakant", role:"Bankettansvarig", email:"bankett@larv.org", imgSrc:vakant},
    {id:"12", name:"Emma Nilsson", role:"Rekryteringsansvarig", email:"rekrytering@larv.org", imgSrc:vakant},
	{id:"13", name:"Martin Östman", role:"Serviceansvarig", email:"service@larv.org", imgSrc:vakant},
	{id:"14", name:"Victoria Nordmark", role:"Marknadsföringsansvarig", email:"pr@larv.org", imgSrc:vakant}
  ]);

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
