import React from 'react';
import GenStatisticCards from './GenStatisticCards';
import './style.scss';

export default function ContainerGS() {

  let arrCardsGenStatic = [
    {
      id: 1,
      header: 'Вы в сообществе',
      descrition: '5 дней',
      link: ''
    },
    {
      id: 2,
      header: 'Всего заработано',
      descrition: '39 935,000$',
      link: ''
    },
    {
      id: 3,
      header: 'Общий вывод',
      descrition: '1 000,000$',
      link: ''
    }
  ]

  return (
    <div className='containerGSC'>
      {arrCardsGenStatic.map(s => 
        <GenStatisticCards 
          key={s.id}
          header={s.header}
          descrition={s.descrition}
          link={s.link}
        />
      )}
      
    </div>
  )
}
