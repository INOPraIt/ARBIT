import React from 'react';
import './Style.scss';

export default function Form({ playsholder, label }) {
  return (
    <div className='contFormStep'>
        <label className='labelStep'>{label}</label>
        <input className='inputStep' placeholder={playsholder}/>
    </div>
  )
}
