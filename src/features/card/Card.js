/* eslint-disable react/prop-types */
import React from 'react';
import './Card.css';

function Card({ props }) {
  const {
    src, title, description, price,
  } = props;
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
