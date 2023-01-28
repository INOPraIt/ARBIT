import React from 'react';
import './CardsEducation.scss';
import plus from '../../../../components/img/btn1.png';
import cross from '../../../../components/img/btn2.png'

export default function CardsEducation({
  header,
  description,
  secretItem,
}) {
  return (
    <div className='cardsEducationContainerS'>
      <div 
        className='cardsEducationBlock'
      >
        <h1 className='headerCardsEducation'>{header}</h1>
        {!secretItem && 
          <button className='btnPlus'>
            <img 
              className='imgBtnPlus'
              src={plus}
            />
          </button>
        }
        {secretItem && 
          <button className='btnPlus'>
            <img 
              className='imgBtnPlus'
              src={cross}
            />
          </button>
        }
      </div>
      {secretItem &&
        <div className='cardsDescription'>
          <p className='cardsDescriptionT'>
            {description}
          </p>
        </div>
      }
    </div>
  )
}
