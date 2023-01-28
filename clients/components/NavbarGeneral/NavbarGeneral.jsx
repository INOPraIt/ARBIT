import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarGeneral.scss';
import one from '../img/1.png';
import nav1 from '../img/nav1.png';
import nav2 from '../img/nav2.png'

export default function Navbar() {
  return (
    <div className='containerNavbarGen'>
      <div className='block320px'>
        <button className='btnNav1'>
          <img
            src={nav1}
            className='nav1Img'
          />
        </button>
        <div>
          <img
            className='nav2Img'
            src={nav2}
          />
        </div>
      </div>
      <div className='blockNavbarGen1'>

        <div>
          <img
            src={one}
            className="imgNavGen1"
          />
        </div>
        <div className='textLinkNavGen'>
          <Link className='textHome' to={'#home'}>Главная</Link>
          <Link className='textProject' to={'#project'}>О проекте</Link>
          <Link className='textQuestion' to={'#question'}>Частые вопросы</Link>
          <Link className='textNews' to={'#home'}>Новостные каналы</Link>
        </div>
      </div>
      <div className='blockNavbar2'>
        <button className='authNavGen'>
          Авторизация
        </button>
      </div>
    </div>
  )
}
