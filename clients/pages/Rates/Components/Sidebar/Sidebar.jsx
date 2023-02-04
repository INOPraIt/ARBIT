import React from 'react';
import oneImg from '../../../../components/img/nav2.png';
import imgGen from '../../../../components/img/9.png';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import img11 from '../../../../components/img/10.png';
import img14 from '../../../../components/img/12.png';
import img15 from '../../../../components/img/14.png';
import img11 from '../../../../components/img/10.png';
import img12 from '../../../../components/img/13.png';
import img13 from '../../../../components/img/11.png';

export default function Sidebar() {

  let isActive = {
    textDecoration: "none",
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#0491FB",
    height: 47,
    display: "flex",
    alignItems: "center",
    width: 236,
    borderRadius: 10,
    paddingLeft: 13,
  };

  return (
    <div className='contSidebarOne'>
      <div>
        <img
          src={oneImg}
          className="oneImg"
        />
      </div>
      <div className='contGenPage'>
        <img
          src={imgGen}
          className='imgGen'
        />
        <NavLink className="genLink" to="/">
          Главная страница
        </NavLink>
      </div>
      <div className='blockSettingsAccount'>
        <div className='textSettingsAccountAndLine'>
          <p className='textSettingsAccount'>Управление аккаунтом</p>
          <hr className='lineSettingsAccount' />
        </div>
        {/*  */}
        <NavLink 
          to='/myoffice' 
          className='myTarifTextC'
          >
          <img src={img11} className='img11' />
          <p className='myOfficeText'>Мой кабинет</p>
        </NavLink>
        <NavLink 
          to='/rates' 
          style={({ isActive }) => 
          isActive ? activeStyle : undefined
        }
          className='myTarifTextC'>
          <img src={img12} className='img12' />
          <p className='myTarifText'>Тарифы</p>
        </NavLink>
        <NavLink 
          to='/finance' 
          style={({ isActive }) => 
          isActive ? activeStyle : undefined
        }
          className='myFinanceTextC'
          
          >
          <img src={img13} className='img13' />
          <p className='myFinanceText'>Финансы</p>
        </NavLink>
        <div className='textOtherAccountAndLine'>
          <p className='textOtherAccount'>Прочее</p>
          <hr className='lineOtherAccount' />
        </div>
        <div className='myFinanceTextC'>
          <img src={img14} className='img13' />
          <p className='myFinanceText'>Поддержка</p>
        </div>
      </div>
      <div>
        <button className='btnLogOut'>
          <img
            src={img15}
          />
          Выйти
        </button>
      </div>
    </div>
  )
}
