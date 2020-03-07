import React, { useState } from 'react';
import '../css/contact.css'

export default function Contact() {

  const [pgList] = useState([
    {id:"1", name:"Simon Johnsson", role:"Projektledare", email:"pl@larv.org", phone:"070-686 25 84", imgSrc:"http://larv.org/img/PG_2020/simon.jpg"},
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
      {pgList.map(person => (
        <div className="Person" key={person.id}>
          <img src={person.imgSrc} alt=""/>
          <p>{person.name}</p>
          <p>{person.role}</p>
          <p><a href={"mailto:" + person.email}>{person.email}</a></p>
          <p>{person.phone}</p>
        </div>
      ))}
    </div>
  );
};