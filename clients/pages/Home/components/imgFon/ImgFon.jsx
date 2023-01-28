import React from 'react';
import './ImgFon.scss';

export default function ImgFon({ link }) {
  return (
    <div className='avatarI8Cont'>
      <div className='avatarBlock'>
        <img
          src={link}
          className='avatar1I8'
        />
      </div>
    </div>
  )
}
