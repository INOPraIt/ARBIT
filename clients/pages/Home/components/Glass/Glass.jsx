import React from 'react';
import './Glass.scss';

export default function Glass({ header, proccent, marginL }) {
  return (
    <div className='borderGlass'>
      <div className='glassContainer' style={{ marginLeft: marginL }}>
        <h1 className='headerGlassContainer'>{header}</h1>
        <h1 className='proccentGlassContainer'>{proccent}%</h1>
      </div>
    </div>
  )
}
