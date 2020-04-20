import React from 'react';
import logo from '../img/logo-white-transparent.png';

export default function Navbar() {

  return (
    <div className='navbar'>
      <img src={logo} className='logo' />
      <input type="checkbox" id="nav-toggle" class="nav-toggle" />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Fair</a></li>
          <li><a href="#">Prep week</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Students</a></li>
          <li><a href="#">Companies</a></li>
        </ul>
      </nav>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    </div>
  );
};