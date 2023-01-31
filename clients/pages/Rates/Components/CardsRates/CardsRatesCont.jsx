import React from 'react'
import CardsRates from './CardsRates';
import './CardsRates.scss';
import rate1 from '../../../../components/img/rate1.png';
import rate2 from '../../../../components/img/rate2.png';
import rate3 from '../../../../components/img/rate3.png';
import rate4 from '../../../../components/img/rate4.png';
import rate5 from '../../../../components/img/rate5.png';
import rate6 from '../../../../components/img/rate6.png';

let arrRates = [
  {
    id: 1,
    link: rate5,
    heaeder: 'Lite',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis sem, fringilla vel libero',
    price: '15-60$',
    saled: false,
  },
  {
    id: 2,
    link: rate4,
    heaeder: 'Confid',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis sem, fringilla vel libero',
    price: '30-100$',
    saled: false,
  },
  {
    id: 3,
    link: rate3,
    heaeder: 'Comfort',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis sem, fringilla vel libero',
    price: 'Приобретено',
    saled: true,
  },
  {
    id: 4,
    link: rate1,
    heaeder: 'Digital',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis sem, fringilla vel libero',
    price: '120-400$',
    saled: false,
  },
  {
    id: 5,
    link: rate6,
    heaeder: 'Evolve',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis sem, fringilla vel libero',
    price: '200-600$',
    saled: false,
  },
  {
    id: 6,
    link: rate2,
    heaeder: 'Modern',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis sem, fringilla vel libero',
    price: '80-300$',
    saled: false,
  }
]

export default function CardsRatesCont() {
  return (
    <div className='contRates'>
      {arrRates.map(s =>
        <CardsRates
          key={s.id}
          link={s.link}
          heaeder={s.heaeder}
          description={s.description}
          price={s.price}
          saled={s.saled}
        />
      )}
    </div>
  )
}
