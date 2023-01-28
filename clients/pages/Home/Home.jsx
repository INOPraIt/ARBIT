import React from 'react';
import './Home.scss';
import two from '../../components/img/2.png';
import CardsHelperContainer from './components/CardsHelpers/CardsHelperContainer';
import CardsContainerTarifs from './components/Cards/CardsContainerTarifs';
import avatarI4 from '../../components/img/6.png'
import avatarI5 from '../../components/img/7.png'
import avatarI7 from '../../components/img/8.png'
import ava1 from '../../components/img/ava1.png'
import CardsEducationContainer from './components/CardsEducation/CardsEducationContainer';
import ImgFon from './components/imgFon/ImgFon';
import ImgFonContainer from './components/imgFon/ImgFonContainer';
import GlassContainer from './components/Glass/GlassContainer';

export default function Home() {
  return (
    <div className='containerHome'>
      <div className='itemBlock1'>
        <div className='blockFI1'>
          <div>
            <h1 className='activationLink'>
              Активируй связку<br />
              и получай от 5% в день
            </h1>
            <p className='textUp'>
              За счёт обмена малоизвестных токенов мы позволяем своим
              инвесторам получать доходность от 5% в сутки и выше.
            </p>
            <button className='btnUp'>
              Присоединиться
            </button>
            <div className='blockCardHelper'>
              <CardsHelperContainer />
            </div>
          </div>
          <div className='imgHomePlanet'>
            <img
              className='imgHome'
              src={two}
            />
          </div>
        </div>
      </div>
      <div className='itemBlock3'>
        <div className='lineAndTitle'>
          <div className='vl1' />
          <div className='titleItemBlock3'>
            <h1 className='dostup'>Доступные</h1>
            <h1 className='tarifs'>тарифы</h1>
          </div>
        </div>
        <div className='cardBlockContDeFlex'>
          <div className='cardTarifs'>
            <CardsContainerTarifs />
          </div>
        </div>
      </div>
      <div className='itemBlock4'>
        <div className='AboutTextNoSecret'>
          <div className='blockAvatarI4'>
            <img
              className='imgAvatarI4'
              src={avatarI4}
            />
          </div>
          <div className='aboutProject'>
            <div className='textsAboutProject'>
              <div class="vl"></div>
              <h1 className='littleT'>Немного</h1>
              <h1 className='projectsT'>о проекте</h1>
            </div>
            <div className='textsDescriptionProjects'>
              <p className='descriptionProjectsT1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In platea sodales scelerisque nunc, a venenatis cursus.
                Id magna aliquam at posuere gravida semper vestibulum et
                iaculis. Sociis adipiscing mi donec egestas. Tortor praesent
                amet cras cras nunc consequat.
              </p>
              <p className='descriptionProjectsT2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In platea sodales scelerisque nunc, a venenatis cursus.
                Id magna aliquam at posuere gravida semper vestibulum et
                iaculis. Sociis adipiscing mi donec egestas. Tortor praesent
                amet cras cras nunc consequat.
              </p>
            </div>
            <div className='descriptionsTextTipsAndImg'>
              <div className='descriptionTips'>
                <img
                  className='imgDiscription'
                  src='https://img.icons8.com/material/512/checked-checkbox--v2.png'
                />
                <p className='textDescription'>Присоединиться может абсолютно любой желающий</p>
              </div>
              <div className='descriptionTips'>
                <img
                  className='imgDiscription'
                  src='https://img.icons8.com/material/512/checked-checkbox--v2.png'
                />
                <p className='textDescription'>Присоединиться может абсолютно любой желающий</p>
              </div>
              <div className='descriptionTips'>
                <img
                  className='imgDiscription'
                  src='https://img.icons8.com/material/512/checked-checkbox--v2.png'
                />
                <p className='textDescription'>Присоединиться может абсолютно любой желающий</p>
              </div>
            </div>
          </div>
        </div>
        <div className='AboutTextOnSecret'>
          <div className='textsAboutProjectOS'>
            <div class="vlOS"></div>
            <h1 className='littleTOS'>Немного</h1>
            <h1 className='projectsTOS'> о проекте</h1>
          </div>
          <div className='blockAvatarI4OS'>
            <img
              className='imgAvatarI4OS'
              src={avatarI4}
            />
          </div>
          <div className='descriptionProjectsTextsOS'>
            <p className='descriptionProjectsT1OS'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In platea sodales scelerisque nunc, a venenatis cursus.
              Id magna aliquam at posuere gravida semper vestibulum et
              iaculis. Sociis adipiscing mi donec egestas. Tortor praesent
              amet cras cras nunc consequat.
            </p>
            <p className='descriptionProjectsT2OS'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In platea sodales scelerisque nunc, a venenatis cursus.
              Id magna aliquam at posuere gravida semper vestibulum et
              iaculis. Sociis adipiscing mi donec egestas. Tortor praesent
              amet cras cras nunc consequat.
            </p>
          </div>
          <div className='descriptionsTextTipsAndImgOS'>
            <div className='descriptionTipsOS'>
              <img
                className='imgDiscriptionOS'
                src='https://img.icons8.com/material/512/checked-checkbox--v2.png'
              />
              <p className='textDescriptionOS'>Присоединиться может абсолютно любой желающий</p>
            </div>
            <div className='descriptionTipsOS'>
              <img
                className='imgDiscriptionOS'
                src='https://img.icons8.com/material/512/checked-checkbox--v2.png'
              />
              <p className='textDescriptionOS'>Присоединиться может абсолютно любой желающий</p>
            </div>
            <div className='descriptionTipsOS'>
              <img
                className='imgDiscriptionOS'
                src='https://img.icons8.com/material/512/checked-checkbox--v2.png'
              />
              <p className='textDescriptionOS'>Присоединиться может абсолютно любой желающий</p>
            </div>
          </div>
        </div>
      </div>



      <div className='itemBlock5'>
        <div className='blockQuestion1'>
          <div class="vl"></div>
          <h1 className='veryQuestionT'>Часто задаваемые</h1>
          <h1 className='questionT'>вопросы</h1>
        </div>
        <div className='podBlockItem5One'>
          <div>
            <CardsEducationContainer />
          </div>
        </div>
      </div>
      <div className='itemBlock6'>
        <div className='podBlockItem5'>
          <div className='blockAvatarQuestion'>
            <img
              className='imgblockAvatarQuestion'
              src={avatarI5}
            />
          </div>
        </div>
      </div>
      <div className='itemSecret5And6'>
        <div className='blockQuestion1O5A6'>
          <div className='vlAndText'>
            <div>
              <div class="vlO5A6"></div>
            </div>
            <div>
              <h1 className='veryQuestionTO5A6'>Часто задаваемые</h1>
              <h1 className='questionTO5A6'>вопросы</h1>
            </div>
          </div>
        </div>
        <div className='blockAvatarQuestionO5A6'>
          <img
            className='imgblockAvatarQuestionO5A6'
            src={avatarI5}
          />
          <CardsEducationContainer />
        </div>
      </div>
      <div className='itemBlock7'>
        <div className='blocKourGoals'>
          <div class="vl"></div>
          <h1 className='kourT'>Наши</h1>
          <h1 className='goalsT'>цели</h1>
        </div>
        <div className='imgYouTubeB'>
          <img
            className='imgYouTube'
            src={avatarI7}
          />
        </div>
      </div>

      <div className='itemBlock8'>
        <ImgFonContainer />
        <div className='podBlock1'>
          <div style={{ display: 'flex', marginTop: 90 }}>
            <div class="vl"></div>
            <h1 className='goalsT'>Реферальная</h1>
            <h1 className='kourT'>программа</h1>
          </div>
          <p className='referaaProgrammT'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In platea sodales scelerisque nunc, a venenatis cursus.
            Id magna aliquam at posuere gravida semper vestibulumx
            et iaculis. Sociis adipiscing mi donec egestas. Tortor
            praesent amet cras cras nunc consequat.
          </p>
          <GlassContainer />
        </div>
      </div>
      <div className='itemBlock9'>
        <h1 className='joinT'>Присоединяйся к команде</h1>
        <h1 className='cryptoT'>Crypto Arbit</h1>
        <button className='btnJoin'>
          Присоединиться
        </button>
      </div>
    </div>
  )
}
