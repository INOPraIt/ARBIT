import React from 'react';
import './Post.scss';

export default function Posts({ posts }) {
  return (
    <ul className="list-group my-4">
      {posts.map((post, index) => {
        return (
          <div key={index} className="cardsContainer">
            <p className='textOne'>{post.id}</p>
            <p className='textTwo'>{post.id}</p>
            <p className='textThree'>{post.id}</p>
            <p className='textFour'>{post.id}</p>
          </div>)
      })}
    </ul>
  )
}
