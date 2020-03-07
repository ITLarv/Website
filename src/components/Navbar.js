import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/fair'>Fair</Link></li>
            <li><Link to='/prelarv'>Prelarv</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/student'>Students</Link></li>
            <li><Link to='/company'>Conpanies</Link></li>
        </ul>
    </nav>
  );
};