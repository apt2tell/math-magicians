import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
// Importing pages
import Home from './components/pages/Home';
import Quotes from './components/pages/Quotes';

// Create App function
const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </div>
);

export default App;
