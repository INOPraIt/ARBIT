import React from 'react';
import './style.scss';


export default function GenStatisticCards({
  header,
  link,
  descrition
}) {
  return (
    <div className='cardStyleOne'>
      <img 
        src={link}
        className="imgCSO"
      />
      <div className='containerCSO'>
        <p className='textCSO'>{header}</p>
        <p className='textCST'>{descrition}</p>
      </div>
    </div>
  )
}
