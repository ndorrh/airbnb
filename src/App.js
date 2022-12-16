import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './common/Footer';
import Header from './common/Header';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

const App = () => (
  // BEM
  <div className="app">
    <Header />
    <Routes>
      <Route path="/searchPage" element={<SearchPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
