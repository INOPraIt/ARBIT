import React from 'react';
import CardsTarifs from './CardsTarifs';
import './CardsTarifs.scss';
import one from '../../../../components/img/card1.png';
import two from '../../../../components/img/card2.png';
import three from '../../../../components/img/card3.png';
import four from '../../../../components/img/card4.png';

export default function CardsTarifsContainer() {
  let cardsTarifsArr = [
    {
      id: 1,
      link: one,
      header: 'Апельсин',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis sem, fringilla vel libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis sem, fringilla vel libero',
      advantage: 'Преимущество',
      linkAdvantage: '',
      marginT: 0,
      marginL: 0,
    },
    {
      id: 2,
      link: two,
      header: 'Апельсин',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis sem, fringilla vel libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis sem, fringilla vel libero',
      advantage: 'Преимущество',
      linkAdvantage: '',
      marginT: 0,
      marginL: 20,
    },
    {
      id: 3,
      link: three,
      header: 'Апельсин',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis sem, fringilla vel libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis sem, fringilla vel libero',
      advantage: 'Преимущество',
      linkAdvantage: '',
      marginT: 20,
      marginL: 0,
    },
    {
      id: 4,
      link: four,
      header: 'Апельсин',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis sem, fringilla vel libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis sem, fringilla vel libero',
      advantage: 'Преимущество',
      linkAdvantage: '',
      marginT: 20,
      marginL: 20,
    }
  ];

  return (
    <div 
      className='contCardsTarifs'
    >
      {cardsTarifsArr.map(s => 
        <CardsTarifs 
          key={s.id}
          link={s.link}
          header={s.header}
          description={s.description}
          advantage={s.advantage}
          linkAdvantage={s.linkAdvantage}
          marginL={s.marginL}
          marginT={s.marginT}
        />
      )}
    </div>
  )
}
