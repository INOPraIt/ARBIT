import React from 'react';
import './ImgFon.scss';

export default function ImgFon({ link, margL, margT }) {
  return (
    <div 
      className='avatarI8Cont'
      style={{ marginLeft: margL, marginTop: margT }}
      >
      <div className='avatarBlock'>
        <img
          src={link}
          className='avatar1I8'
        />
      </div>
    </div>
  )
}
