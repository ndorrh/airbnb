import { Button } from '@mui/material';
import React from 'react';
import './SearchNearBy.css';
import SearchResults from './SearchResults';
import { searchResults } from '../../app/store';

const SearchNearBy = () => (
  <div className="seachPage__info">
    <p>62 stays . 26 August to 30 August . 2 . guest</p>
    <h1>Stays nearby</h1>

    <Button variant="outlined">Cancellation Flexibility</Button>
    <Button variant="outlined"> place</Button>
    <Button variant="outlined">Price</Button>
    <Button variant="outlined">Rooms and beds</Button>
    <Button variant="outlined">More filters</Button>
    <SearchResults prop={searchResults} />
  </div>
);

export default SearchNearBy;
