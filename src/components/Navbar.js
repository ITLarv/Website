import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import '../css/navbar.css';

//TODO: preserve active tab during refresh
//TODO: active drop down links

export default function Navbar() {

  const history = useHistory();
  
  const isWide = useMediaQuery({ query: '(min-device-width: 600px)' });

  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState('/')

  const setShowMenuFunction = () => {
    setShowMenu(!showMenu);
  }

  const btnClick = (e, l) => {
    setActive(l);
    history.push(l);
  }

  return (
    <div className={!isWide && showMenu ? 'topnav responsive' : 'topnav'}>
      <div className={active === "/" ? "active dropdown" : "dropdown"}>
        <button className="dropbtn" onClick={e => btnClick(e, '/')}>Home</button>
        <div className="dropdown-content">
          <Link to="/news">News</Link>
          <Link to="/about">About</Link>
          <Link to="/calendar">Calendar</Link>
        </div>
      </div>
      <div className={active === "/fair" ? "active dropdown" : "dropdown"}>
        <button className="dropbtn" onClick={e => btnClick(e, '/fair')}>Fair</button>
        <div className="dropdown-content">
          <Link to="/catalog">Catalog</Link>
          <Link to="/map">Map</Link>
        </div>
      </div>
      <div className={active === "/prelarv" ? "active dropdown" : "dropdown"}>
        <button className="dropbtn" onClick={e => btnClick(e, '/prelarv')}>PreLARV</button>
      </div>
      <div className={active === "/contact" ? "active dropdown" : "dropdown"}>
        <button className="dropbtn" onClick={e => btnClick(e, '/contact')}>Contact</button>
      </div>
      <div className={active === "/student" ? "active dropdown" : "dropdown"}>
        <button className="dropbtn" onClick={e => btnClick(e, '/student')}>Students</button>
        <div className="dropdown-content">
          <Link to="/students/faq">FAQ</Link>
          <Link to="/hosts">Hosts</Link>
          <Link to="/students/im">Individual meetings</Link>
          <Link to="/students/calendar">Calendar</Link>
        </div>
      </div>
      <div className={active === "/company" ? "active dropdown" : "dropdown"}>
        <button className="dropbtn" onClick={e => btnClick(e, '/company')}>Companies</button>
        <div className="dropdown-content">
          <Link to="/companies/faq">FAQ</Link>
          <Link to="/companies/im">Individual meetings</Link>
          <Link to="/companies/calendar">Calendar</Link>
        </div>
      </div>
      <a className="icon" onClick={setShowMenuFunction}>&#9776;</a>
    </div>
  );
};