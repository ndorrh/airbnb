import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Button } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';

function Search() {
  const navigate = useNavigate();

  const [date, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const selectionRange = {
    startDate: date.startDate,
    endDate: date.endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setDates({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
    });
  };
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guess
        <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => navigate('/searchPage')}>Search Airbnb</Button>

    </div>
  );
}

export default Search;
