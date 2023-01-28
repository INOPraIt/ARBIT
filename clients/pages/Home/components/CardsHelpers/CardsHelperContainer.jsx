import React from 'react'
import CardHelper from './CardHelper';
import three from '../../../../components/img/3.png';
import four from '../../../../components/img/4.png';
import five from '../../../../components/img/5.png';

export default function CardsHelperContainer() {
  const cardsHelper = [
    {
      id: 1,
      link: '../../../../components/img/3.png',
      span: 'Сообщество существует',
      header: '5 дней',
      marginL: 0,
    },
    {
      id: 2,
      link: '../../../../components/img/4.png',
      span: 'Пользователей',
      header: '39 935,000$',
      marginL: 20,
    },
    {
      id: 3,
      link: '../../../../components/img/5.png',
      span: 'Куплено тарифов',
      header: '54 121,000$',
      marginL: 20,
    },
  ]

  return (
    <div className='cardHelperContainer'>
      {cardsHelper.map(s =>
        <CardHelper 
          key={s.id}
          header={s.header}
          span={s.span}
        />
      )}
    </div>
  )
}
