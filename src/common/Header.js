import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import './Header.css';
import { Avatar } from '@mui/material';

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__icon"
        src="https://miro.medium.com/max/1400/0*NChTo-XqLOxLabIW"
        alt="airbnb logo"
      />
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a host </p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </header>
  );
}
