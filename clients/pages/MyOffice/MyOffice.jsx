import React from 'react';
import './MyOffice.scss';
import Sidebar from '../Rates/Components/Sidebar/Sidebar';
import one from '../../components/img/avatarProfile1.png';
import two from '../../components/img/btn3.png';
import { NavLink } from 'react-router-dom';
import ContainerGS from './components/GenStatistic/ContainerGS';
import TextAndLine from './components/ComponentTextAndLine/TextAndLine';
import FinanceStaticContainer from './components/FinanceStatistic/FinanceStaticContainer';
import three from '../../components/img/15.png';

export default function MyOffice() {
  return (
    <div className='myOfficeContainer'>
      <div className='myOfficeI1'>
        <Sidebar />
      </div>
      <div className='myOfficeI2'>
        <div className='containerLineAndTextInfoUser'>
          <div className='lineInformationUser' />
          <p className='textInformationUser'>
            Информация пользователя
          </p>
        </div>
        <div className='cardUserAvaCont'>
          <div className='blockCardUserAva'>
            <img
              src={one}
              className="imgAvatar1"
            />
            <p className='textNameUser'>Administrator</p>
            <button className='btnRedactor'>
              <img
                src={two}
                className='redactorImg'
              />
              <p className='redactorImgText'>Редактировать</p>
            </button>
          </div>
          <div className='blockLineCardUserBalance'>
          </div>
          <div className='blockCardUserBalance'>
            <div className='balanceCard1'>
              <div className='settingAccountAndSettingBalance'>
                <p className='settingBalanceT'>Ваш баланс</p>
                <NavLink
                  to='/finance'
                  className='settingBalanceL'
                >
                  Управление балансом
                </NavLink>
              </div>
              <p className='balanceUsersText'>1 000,000$</p>
              <p className='approximatelyText'>&asymp; 60 727,27&#8381;</p>
            </div>
            <div className='balanceCard2'>
              <div className='textsEmail'>
                <p className='youEmailText'>Ваша электронная почта</p>
                <p className='youEmail'>admin@cryptoarbit.com</p>
              </div>
            </div>
            <div className='balanceCard3'>
              <div className='textsReferalLink'>
                <p className='youReferalLinkText'>Ваша реферальная ссылка</p>
                <p className='youReferalLink'>www.cryptoarbit.com/ref=135413887</p>
              </div>
            </div>
          </div>
        </div>
        <div className='staticBlockContainer'>
          <TextAndLine
            header={'Общая статистика'}
          />
          <div className='cardsGenStatistic'>
            <ContainerGS />
          </div>
        </div>
        <div className='financeStatistic'>
          <TextAndLine
            header={'Финансовая статистика'}
          />
          <div>
            <FinanceStaticContainer />
          </div>
        </div>
        <div className='referalProgramm'>
          <TextAndLine
            header={'Реферальная программа'}
          />
          <div className='myReferalSetka'>
            <div className='cardReferalSetka'>
              <p className='myReferalSetkaText'>Моя реферальная сетка</p>
              <div className='cardReferalOne'>
                <div className='podCardOne'>
                  <p className='referalText'>Рефералов в структуре</p>
                  <p className='referalNumber'>20</p>
                </div>
                <div className='podCardTwo'>
                  <p className='pricedReferalsText'>Заработанно с рефералов всего</p>
                  <p className='pricedReferalsNumber'>16 531,655$</p>
                  <p className='pricedReferalsApproximately'>&asymp; 394 381,33&#8381;</p>
                </div>
              </div>
              <div className='cardsGeneralReferalLink'>
                <div className='cardRerferalLink'>
                  <p className='youReferalLinkText'>Ваша реферальная ссылка</p>
                  <div className='cardReferalLink'>
                    <p className='textLink'>www.cryptoarbit.com/ref=135413887</p>
                    <img
                      src={three}
                      className='imgCopy'
                    />
                  </div>
                </div>
                <div className='cardRerferalLink'>
                  <p className='youReferalLinkText'>Реферальный код</p>
                  <div className='cardReferalLink'>
                    <p className='textLink'>GRTEND80</p>
                    <img
                      src={three}
                      className='imgCopy'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='myReferals'>
            <p className='myReferalsText'>Мои рефералы</p>
            <div className='twoCards'>
              <div className='blockSearchReferals'>
                <p className='searchToReferals'>Поиск по рефералом</p>
                <p className='nameAndEmailUser'>Имя пользователя или почта</p>
              </div>
              <div className='blockFilterToLevels'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}