/* eslint-disable react/prop-types */
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './SearchResults.css';

function SearchResults({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="Search__info">
      <img src={img} alt={title} />
      <FavoriteBorderIcon className="SearchResults__heart" />
      <div className="searchResults__info">
        <div className="searchResults__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p>{description}</p>
        </div>
        <div className="searchResults__infoBottom">
          <div className="searchResults__stars">
            <StarIcon className="searchResults__star" />
            <p>
              {' '}
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
