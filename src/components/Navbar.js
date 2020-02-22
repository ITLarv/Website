import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li>Fair</li>
            <li>PreLARV</li>
            <li>Contact</li>
            <li>Students</li>
            <li>Companies</li>
        </ul>
    </nav>
  );
};