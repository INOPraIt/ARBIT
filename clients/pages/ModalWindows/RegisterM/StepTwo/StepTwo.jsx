import React, { Profiler } from 'react';
import './Style.scss';
import one from '../../../../components/img/avatarReg/1.png';
import two from '../../../../components/img/avatarReg/1.png';
import three from '../../../../components/img/avatarReg/1.png';
import four from '../../../../components/img/avatarReg/4.png';
import five from '../../../../components/img/avatarReg/5.png';
import six from '../../../../components/img/avatarReg/6.png';
import seven from '../../../../components/img/avatarReg/7.png';
import eight from '../../../../components/img/avatarReg/8.png';
import nine from '../../../../components/img/avatarReg/9.png';
import ten from '../../../../components/img/avatarReg/10.png';
import eleven from '../../../../components/img/avatarReg/11.png';
import twelve from '../../../../components/img/avatarReg/12.png';
import thirteen from '../../../../components/img/avatarReg/13.png';
import fourteen from '../../../../components/img/avatarReg/14.png';
import fiveteen from '../../../../components/img/avatarReg/15.png';
import sixteen from '../../../../components/img/avatarReg/16.png';

let arrayAvatar = [
  { id: 1, link: one, },
  { id: 2, link: two, },
  { id: 3, link: three, },
  { id: 4, link: four, },
  { id: 5, link: five, },
  { id: 6, link: six, },
  { id: 7, link: seven, },
  { id: 8, link: eight, },
  { id: 9, link: nine, },
  { id: 10, link: ten, },
  { id: 11, link: eleven, },
  { id: 12, link: twelve, },
  { id: 13, link: thirteen, },
  { id: 14, link: fourteen, },
  { id: 15, link: fiveteen, },
  { id: 16, link: sixteen, },
]

export default function StepTwo({ 
  active,
  setActive,
  activeStepTwo,
  setActiveStepTwo,
  activeStepThree,
  setActiveStepThre,
}) {

  const onBack = () => {
    setActive(true)
    setActiveStepTwo(false)
  }

  const onCompleteTheReg = () => {
    setActive(false)
    setActiveStepTwo(false)
    setActiveStepThre(true)
  }

  return (
    <div className={activeStepTwo ? "contStepRegTwo active" : "contStepRegTwo"}>
      <div className='lineAndRegText'>
        <div className='lineRegisterAccount' />
        <p className='registerAccount'>Регистрация аккаунта</p>
      </div>
      <p className='textRegistration'>
        Привет, новый друг! Рады видеть тебя в нашей команде.
        Остался последний шаг — <br />
        выбор аватара. Выбери из списка ниже, наиболее подходящий тебе вариант<br />
        и нажми кнопку «Завершить регистрацию».
      </p>
      <div className='avatarsblockFlex'>
        <div className='avatarsblock'>
          {arrayAvatar.map(s =>
            <div key={s.id} className='contAvatarReg'>
              <img
                src={s.link}
                className='imgI'
              />
            </div>
          )}
        </div>
      </div>
      <div className='btnsCompleteRegistration'>
        <button 
          onClick={onCompleteTheReg}
          className='btnCompleteRegistration'
        >
          Завершить регистрацию
        </button>
        <button
          onClick={onBack}
          className='btnBack'>
          Назад
        </button>
      </div>
    </div>
  )
}
