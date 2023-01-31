import React from 'react';
import './style.scss';

export default function TextAndLine({header}) {
  return (
    <div>
      <div className='blockLineAndGenStatic'>
        <div className='lineInformationUser' />
        <p className='textjGenStatistic'>{header}</p>
      </div>
    </div>
  )
}
