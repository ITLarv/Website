import React from 'react';

export default function Navbar() {

  return (
    <div className='navbar'>
      <h1 class="logo">LARV</h1>
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