import React, { useState } from "react";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
	// prettier-ignore
	const pl = {id:"1", name:"Simon Johnsson", role:"Projektledare", email:"pl@larv.org", phone:"070-686 25 84", imgSrc:"http://larv.org/img/PG_2020/simon.jpg"};

	// prettier-ignore
	const [pgList] = useState([
    {id:"2", name:"Sabina Björk", role:"Vice Projektledare", email:"viceprojektledare@larv.org", imgSrc:"http://larv.org/img/PG_2020/simon.jpg"},
    {id:"3", name:"Viktir Centing", role:"Företagsansvarig", email:"anmalan@larv.org", imgSrc:"http://larv.org/img/PG_2020/simon.jpg"},
    {id:"4", name:"Isabell Gustafsson", role:"Företagsansvarig", email:"anmalan@larv.org", imgSrc:"http://larv.org/img/PG_2020/simon.jpg"},
    {id:"5", name:"Vakant", role:"Eventansvarig", email:"event@larv.org", imgSrc:"http://larv.org/img/PG_2020/simon.jpg"},
    {id:"6", name:"Alyssa Göransson", role:"Samarbetsansvarig", email:"samarbete@larv.org", imgSrc:"http://larv.org/img/PG_2020/simon.jpg"},
    {id:"7", name:"99", role:"Grafikansvarig", email:"grafiker@larv.org", imgSrc:"http://larv.org/img/PG_2020/simon.jpg"},
    {id:"8", name:"Panda", role:"IT-ansvarig", email:"it@larv.org", imgSrc:"http://larv.org/img/PG_2020/simon.jpg"},
    {id:"9", name:"Vakant", role:"Mässbyggnadsansvarig", email:"massbyggnad@larv.org", imgSrc:"http://larv.org/img/PG_2020/simon.jpg"},
    {id:"10", name:"Larvid", role:"Logistikansvarig", email:"logistik@larv.org", imgSrc:"http://larv.org/img/PG_2020/simon.jpg"},
    {id:"11", name:"Ida", role:"Bankettansvarig", email:"bankett@larv.org", imgSrc:"http://larv.org/img/PG_2020/simon.jpg"},
    {id:"12", name:"Ibitza", role:"Rekryteringsansvarig", email:"rekrytering@larv.org", imgSrc:"http://larv.org/img/PG_2020/simon.jpg"},
    {id:"13", name:"Jonathan", role:"Serviceansvarig", email:"service@larv.org", imgSrc:"http://larv.org/img/PG_2020/simon.jpg"}
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
