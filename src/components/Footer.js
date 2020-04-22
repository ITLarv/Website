import React from 'react';
import TKLlogo from '../img/tkl_logo_red.png'
import { Link } from 'react-router-dom';

export default function Footer() {

  return (
    <div className='footer'>
        <h3>Teknologkåren</h3>
        <h4>Luleå tekniska universitet</h4>
        <p>971 87 Luleå</p>
        <a target='_blank' href='https://teknologkaren.se'><img src={TKLlogo} /></a>
    </div>
  );
};