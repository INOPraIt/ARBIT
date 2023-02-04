import React from 'react'
import CardHelper from './CardHelper';
import elips1 from '../../../../components/img/Elips1.png';
import elips2 from '../../../../components/img/Elips2.png';
import elips3 from '../../../../components/img/Elips3.png';

export default function CardsHelperContainer() {
  const cardsHelper = [
    {
      id: 1,
      link: elips1,
      span: 'Сообщество существует',
      header: '5 дней',
      marginL: 0,
    },
    {
      id: 2,
      link: elips2,
      span: 'Пользователей',
      header: '39 935,000$',
      marginL: 20,
    },
    {
      id: 3,
      link: elips3,
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
          link={s.link}
        />
      )}
    </div>
  )
}
