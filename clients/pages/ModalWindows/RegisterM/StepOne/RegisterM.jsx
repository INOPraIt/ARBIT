import React from 'react';
import Form from './components/Form';
import './Style.scss';
import oneReg from '../../../../components/img/16.png';
import stepOneImg from '../../../../components/img/avatarReg/setpOneSecret.png';
import { ReactSVG } from 'react-svg';

export default function RegisterM({ active, setActive, activeStepTwo, setActiveStepTwo }) {

  const onContinuation = () => {
    setActive(false);
    setActiveStepTwo(true)
  }

  return (
    <div className={active ? "containerRegisterM active" : "containerRegisterM"} >
      <div className='itemRegisterM1'>
        <div className='lineAndImgSecret'> 
          <div className='lineAndRegText'>
            <div className='lineRegisterAccount' />
            <p className='registerAccount'>Регистрация аккаунта</p>
          </div>
          <img
            src={stepOneImg}
            className="secretOneImg"
          />
        </div>
        <p className='textRegistration'>
          Регистрация возможна только по реф. коду
          или ссылке. Если они отсутствуют, свяжитесь
          с менеджером @manager<br />
          Не используйте временные почты<br />
          для регистрации
        </p>
        <div className='formsContStepOne'>
          <Form
            playsholder={'Никнейм'}
            label={'Ваш никнейм'}
          />
          <Form
            playsholder={'Электронная почта'}
            label={'Ваша электронная почта'}
          />
          <Form
            playsholder={'@username'}
            label={'Ваш телеграм аккаунт'}
          />
          <Form
            playsholder={'GRTEND80'}
            label={'Реферальный код'}
          />
        </div>
        <div>
          <button
            className='continuation'
            onClick={onContinuation}
          >Продолжить</button>
          <button
            className='cancellation'
            onClick={() => setActive(false)}
          >Отмена</button>
        </div>
        <p className='textYouAlreadyHaveAnAccount'>
          У вас уже есть аккаунт?
          <button className='btnTextLogin'>
            Войти
          </button>
        </p>
      </div>
      <div className='itemReg2'>
        <img
          src={oneReg}
          className='oneRegHtml'
        />
      </div>
    </div>
  )
}


