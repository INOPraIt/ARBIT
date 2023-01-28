import React from 'react';
import './ImgFon.scss';
import ava1 from '../../../../components/img/ava1.png';
import ava2 from '../../../../components/img/ava2.png';
import ava3 from '../../../../components/img/ava3.png';
import ava4 from '../../../../components/img/ava4.png';
import ava5 from '../../../../components/img/ava5.png';
import ava6 from '../../../../components/img/ava6.png';
import ava7 from '../../../../components/img/ava7.png';
import ava8 from '../../../../components/img/ava8.png';
import ava9 from '../../../../components/img/ava9.png';
import ava10 from '../../../../components/img/ava10.png';
import ImgFon from './ImgFon';

export default function ImgFonContainer() {
  let image = [
    { id: 1, link: ava1, head: 'dawdawdawd', margL: 50, margT: 30},
    { id: 2, link: ava2, head: 'dawdawdawd', margL: 30, margT: 30},
    { id: 3, link: ava3, head: 'dawdawdawd', margL: 30, margT: 30},
    { id: 4, link: ava4, head: 'dawdawdawd', margL: 30, margT: 30},
    { id: 5, link: ava5, head: 'dawdawdawd', margL: 30, margT: 30},
    { id: 6, link: ava6, head: 'dawdawdawd', margL: 50, margT: 30},
    { id: 7, link: ava7, head: 'dawdawdawd', margL: 30, margT: 30},
    { id: 8, link: ava8, head: 'dawdawdawd', margL: 30, margT: 30},
    { id: 9, link: ava9, head: 'dawdawdawd', margL: 30, margT: 30},
    { id: 10, link: ava10, head: 'dawdawdawd', margL: 30, margT: 30},
  ]

  return (
    <div className='containerImgFonContainer'>
      {image.map(s =>
        <ImgFon 
          key={s.id}
          link={s.link}
          margL={s.margL}
          margT={s.margT}
        />
      )}
    </div>
  )
}
