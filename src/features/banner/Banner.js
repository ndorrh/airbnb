/* eslint-disable no-unused-expressions */
import { Button } from '@mui/material';
import React, { useState } from 'react';
import './Banner.css';
import Search from './Search';

export default function Banner() {
  const [state, setState] = useState(
    {
      hide: 'Show Dates',
      showSearchDatePicker: false,
    },
  );

  const handleDate = () => {
    (state.hide === 'Show Dates') ? setState({
      hide: 'Hide',
      showSearchDatePicker: true,
    }) : setState({
      hide: 'Show Dates',
      showSearchDatePicker: false,
    });
  };

  return (
    <div className="banner">
      <div className="banner__search">
        {state.showSearchDatePicker && <Search />}
        <Button
          variant="outlined"
          className="banner__searchBtn"
          onClick={handleDate}
        >
          {state.hide}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a different type of Getaway to uncover the hidden gems near you</h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}
