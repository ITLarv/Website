import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {

  const history = useHistory();
  
  const isWide = useMediaQuery({ query: '(min-device-width: 600px)' });

  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState('/');

  const mount = () => {
    load();
    const unmount = () => {}
    return unmount
  }
  useEffect(mount, [])

  const load = () => {
    setActive(window.location.pathname);
  }

  const setShowMenuFunction = () => {
    setShowMenu(!showMenu);
  }

  const btnClick = (e, l) => {
    setActive(l);
    history.push(l);
  }

  return (
    <div className={!isWide && showMenu ? 'topnav responsive' : 'topnav'}>
      <div className={active === "/" || active === "/news" || active === "/about" || active === "/calendar" ? "active dropdown" : "dropdown"}>
        <button className="dropbtn" onClick={e => btnClick(e, '/')}>Home</button>
        <div className="dropdown-content">
          <div className={active === "/news" ? "active dropdown-button" : "dropdown-button"}>
            <button onClick={e => btnClick(e, '/news')}>News</button>
          </div>
          <div className={active === "/about" ? "active dropdown-button" : "dropdown-button"}>
            <button onClick={e => btnClick(e, '/about')}>About</button>
          </div>
          <div className={active === "/calendar" ? "active dropdown-button" : "dropdown-button"}>
            <button onClick={e => btnClick(e, '/calendar')}>Calendar</button>
          </div>
        </div>
      </div>
      <div className={active === "/fair" || active === "/catalog" || active === "/map" ? "active dropdown" : "dropdown"}>
        <button className="dropbtn" onClick={e => btnClick(e, '/fair')}>Fair</button>
        <div className="dropdown-content">
          <div className={active === "/catalog" ? "active dropdown-button" : "dropdown-button"}>
            <button onClick={e => btnClick(e, '/catalog')}>Catalog</button>
          </div>
          <div className={active === "/map" ? "active dropdown-button" : "dropdown-button"}>
            <button onClick={e => btnClick(e, '/map')}>Map</button>
          </div>
        </div>
      </div>
      <div className={active === "/prelarv" ? "active dropdown" : "dropdown"}>
        <button className="dropbtn" onClick={e => btnClick(e, '/prelarv')}>PreLARV</button>
      </div>
      <div className={active === "/contact" ? "active dropdown" : "dropdown"}>
        <button className="dropbtn" onClick={e => btnClick(e, '/contact')}>Contact</button>
      </div>
      <div className={active === "/students" || active === "/students/faq" || active === "/students/hosts" || active === "/students/individual-meetings" || active === "/students/calendar" ? "active dropdown" : "dropdown"}>
        <button className="dropbtn" onClick={e => btnClick(e, '/students')}>Students</button>
        <div className="dropdown-content">
          <div className={active === "/students/faq" ? "active dropdown-button" : "dropdown-button"}>
            <button onClick={e => btnClick(e, '/students/faq')}>FAQ</button>
          </div>
          <div className={active === "/students/hosts" ? "active dropdown-button" : "dropdown-button"}>
            <button onClick={e => btnClick(e, '/students/hosts')}>Hosts</button>
          </div>
          <div className={active === "/students/individual-meetings" ? "active dropdown-button" : "dropdown-button"}>
            <button onClick={e => btnClick(e, '/students/individual-meetings')}>Individual Meetings</button>
          </div>
          <div className={active === "/students/calendar" ? "active dropdown-button" : "dropdown-button"}>
            <button onClick={e => btnClick(e, '/students/calendar')}>Calendar</button>
          </div>
        </div>
      </div>
      <div className={active === "/companies" || active === "/companies/faq" || active === "/companies/individual-meetings" || active === "/companies/calendar" ? "active dropdown" : "dropdown"}>
        <button className="dropbtn" onClick={e => btnClick(e, '/companies')}>Companies</button>
        <div className="dropdown-content">
          <div className={active === "/companies/faq" ? "active dropdown-button" : "dropdown-button"}>
            <button onClick={e => btnClick(e, '/companies/faq')}>FAQ</button>
          </div>
          <div className={active === "/companies/individual-meetings" ? "active dropdown-button" : "dropdown-button"}>
            <button onClick={e => btnClick(e, '/companies/individual-meetings')}>Individual Meetings</button>
          </div>
          <div className={active === "/companies/calendar" ? "active dropdown-button" : "dropdown-button"}>
            <button onClick={e => btnClick(e, '/companies/calendar')}>Calendar</button>
          </div>
        </div>
      </div>
      <button className="icon" onClick={setShowMenuFunction}>&#9776;</button>
    </div>
  );
};