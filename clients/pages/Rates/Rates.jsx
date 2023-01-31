import React from 'react'
import CardsRatesCont from './Components/CardsRates/CardsRatesCont';
import Sidebar from './Components/Sidebar/Sidebar'
import './Rates.scss';

export default function Rates() {
  return (
    <div className='containerRates'>
      <div className="itemRates1">
        <Sidebar />
      </div>
      <div className="itemRates2">
      <div className='textRatesAndLine'>
          <hr className='ratesLine'/>
          <p className='ratesText'>Активировать связку</p>
        </div>
        <div className='containerRates2CardsRates'>
          <CardsRatesCont />
        </div>
      </div>
    </div>
  )
}
