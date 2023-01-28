import React from 'react';
import Glass from './Glass';

export default function GlassContainer() {

  let glassArr = [
    {id: 1, header: '1 уровень', proccent: '20', marginL: 27},
    {id: 2, header: '2 уровень', proccent: '12', marginL: 20},
    {id: 3, header: '3 уровень', proccent: '8', marginL: 20},
    {id: 4, header: '4 уровень', proccent: '5', marginL: 20},
    {id: 5, header: '5 уровень', proccent: '3', marginL: 20},
  ]

  return (
    <div className='glassContOne'>
      {glassArr.map(s => 
        <Glass
          key={s.id}
          header={s.header}
          proccent={s.proccent}
          marginL={s.marginL}
        />
      )}
    </div>
  )
}
