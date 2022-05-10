import React from 'react';
import './Loader.css';

export default function Loader() {

  window.onload = () => {
    document.querySelector('.loader-component').style.display = 'none';
  };

  return (
    <div className='loader-component'></div>
  );
}