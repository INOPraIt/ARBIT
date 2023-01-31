import React from 'react';
import './CardsRates.scss';
import rate1 from '../../../../components/img/rate1.png';


export default function CardsRates({
  link,
  heaeder,
  description,
  price,
  saled
}) {
  return (
    <div className='cardsRates'>
      <div className='blockImgRates'>
        <img
          className='imgRates'
          src={link}
        />
      </div>
      <p className='headerRatesText'>{heaeder}</p>
      <p className='descriptionRatesText'>{description}</p>
      <div className='priceAndContent'>
        {saled &&
          <p className='priceRatesSucsess'>Приобретено</p>
        } : {!saled &&
          <div>
            <p className='priceRatesText'>Стоимость</p>
            <p className='priceRatesNumber'>{price}</p>
          </div>
        }
        <button className='btnClickСontent'>
          Просмотреть содержимое
        </button>
      </div>
    </div>
  )
}
