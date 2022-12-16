/* eslint-disable react/prop-types */
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './SearchResults.css';

function SearchResults({ prop }) {
  const {
    src, location, title, description, star, price, total,
  } = prop;
  return (
    <div className="Search__info">
      <img src={src} alt={title} />
      <div className="searchResults__info">
        <div className="searchResults__infoTop">
          <div className="heartAndLocation">
            <p>{location}</p>
            <FavoriteBorderIcon className="SearchResults__heart" />
          </div>
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
