import React from 'react';
import './Style.scss';
import Form from './components/Form';
import oneReg from '../../../../components/img/avatarReg/stepThree.png'

export default function StepThree({
  activeStepThree,
  setActiveStepThre
}) {

  const onClose = () => {
    setActiveStepThre(false);
  }

  return (


      <div className={activeStepThree ? "modalThree active" : "modalThree"}>
        <div className='itemRegisterM1'>
          <div className='lineAndRegText'>
            <div className='lineRegisterAccount' />
            <p className='registerAccount'>Регистрация аккаунта</p>
          </div>
          <p className='textRegistrationStep'>
            Вы успешно зарегистрированы!<br />
            Для входа в Ваш аккаунт используйте<br />
            данные ниже
          </p>
          <div className='formsStepOne'>
            <Form
              playsholder={'Ваша электронная почта'}
              label={'Ваш никнейм'}
            />
            <Form
              playsholder={'Ваш пароль'}
              label={'Ваша электронная почта'}
            />
          </div>
          <div>
          </div>
          <button
            onClick={onClose}
            className='btnTextLoginOne'>
            Закрыть
          </button>
        </div>
        <div className='itemRegisterM2'>
          <img
            src={oneReg}
            className='stepThreeReg'
          />
        </div>
      </div>


  )
}
