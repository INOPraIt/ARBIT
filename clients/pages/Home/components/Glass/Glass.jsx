import React from 'react';
import './Glass.scss';

export default function Glass({ header, proccent }) {
  return (
    <div className='borderGlass'>
      <div className='glassContainer'>
        <h1 className='headerGlassContainer'>{header}</h1>
        <h1 className='proccentGlassContainer'>{proccent}%</h1>
      </div>
    </div>
  )
}
