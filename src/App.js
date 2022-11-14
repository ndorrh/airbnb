import React from 'react';
import './App.css';
import Footer from './common/Footer';
import Header from './common/Header';
import Home from './pages/Home';

const App = () => (
  // BEM
  <div className="app">
    <Header />
    <Home />
    <Footer />
  </div>
);

export default App;
