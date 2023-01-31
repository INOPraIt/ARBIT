import React from 'react';
import FinanceStatistic from './FinanceStatistic';
import './style.scss';

export default function FinanceStaticContainer() {

  let arrFinanceStaticContainer = [
    {
      id: 1,
      header: 'Bitcoin (BTC)',
      description: '0,000',
      link: 'dawd',
    },
    {
      id: 2,
      header: 'Ethereum (ETH)',
      description: '0,000',
      link: 'dawd',
    },
    {
      id: 3,
      header: 'dawd',
      description: '0,000',
      link: 'dawdwa',
    },
  ]

  return (
    <div className='containerFS'>
      {arrFinanceStaticContainer.map(s =>
        <FinanceStatistic
          header={s.header}
          description={s.description}
          key={s.id}
          link={s.link}
        />
      )}
    </div>
  )
}
