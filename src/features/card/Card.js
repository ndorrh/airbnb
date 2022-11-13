import React from 'react';
import './Card.css';

function Card({ src, title, description, price }) {
  return (
    <div className="cards">
      <img src={src} alt="" />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Card;
