import React from 'react'

export default function FinanceStatistic({
  header,
  link,
  description
}) {
  return (
    <div className='containerFinanceStatisticContainer'>
      <div className='line' />
      <img src={link} className="logoLink"/>
      <div className='statisticCards'>
        <p className='statisticTextH'>{header}</p>
        <p className='statisticTextD'>{description}</p>
      </div>
    </div>
  )
}
