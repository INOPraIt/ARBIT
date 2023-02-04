import React from 'react';
import './CardHelper.scss';

export default function CardHelper({ link, header, span }) {

  return (
    <div>
      <div className='сardHelper'>
        <img
          src={link}
          style={{ width: 46, height: 46, marginTop: 20, marginLeft: 20, borderRadius: 40 }}
        />
        <div>
          <p className='pSpan'>{span}</p>
          <p className='pHeader'>{header}</p>
        </div>
      </div>
    </div>
  )
}
