import React from 'react';
import './CardsTarifs.scss';

export default function CardsTarifs({
  link,
  header,
  description,
  advantage,
  linkAdvantage,
  marginL,
  marginT
}) {
  return (
    <div
      className='cardsTarifsContainer'
    >
      <img
        src={link}
        className='imgCardTarif'
      />
      <p className='textHeader'>{header}</p>
      <p className='textDiscription'>{description}</p>
      <div className='blockAdvantageContainer'>
        <div>
          <div className='podBlockAdvantage4'>
            <img
              className='imgAdvantage'
              src='https://img.icons8.com/material/512/checked-checkbox--v2.png'
            />
            <p className='textAdvantage'>{advantage}</p>
          </div>
        </div>
      </div>
      <button className='btnSeeContent'>
        Посмотреть содержимое
      </button>
    </div>
  )
}
