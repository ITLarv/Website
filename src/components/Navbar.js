import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo-white-transparent.png';

export default function Navbar() {

  return (
    <div className='navbar'>
      <img src={logo} className='logo' />
      <input type="checkbox" id="nav-toggle" class="nav-toggle" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/fair">Fair</Link></li>
          <li><Link to="/prelarv">Prep week</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/companies">Companies</Link></li>
        </ul>
      </nav>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    </div>
  );
};