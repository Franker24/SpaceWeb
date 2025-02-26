/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Universo from './Components/Universo';
import Sistema from './Components/Sistema';
import Tierra from './Components/Tierra';

function App() {
  return (
    <BrowserRouter>
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universo" element={<Universo />} />
          <Route path="/sistema" element={<Sistema />} />
          <Route path="/tierra" element={<Tierra />} />
        </Routes>
        <Footer />
      </>
    </Router>
    </BrowserRouter>
  );
}

export default App;