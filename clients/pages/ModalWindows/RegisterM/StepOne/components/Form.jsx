import React from 'react';
import './Style.scss';

export default function Form({ playsholder, label }) {
  return (
    <div className='contForm'>
        <label className='label'>{label}</label>
        <input className='input' placeholder={playsholder}/>
    </div>
  )
}
