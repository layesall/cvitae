import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import './Notfound.css'

export default function Notfound() {
  return (
    <div className='notfound-component'>
      <h1 className='notfound-title'>404 | Notfound</h1>
      <Link to='/' className='btn-404-exit'> 
        <FaAngleDoubleLeft /> Exit
      </Link>
    </div>
  );
}
