import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Splash from './splash/splash';
import Nav from './nav/nav';
import Footer from './footer/footer';
import Calendar_Page from './calendar/Calendar';
import Notes_Page from './notes/Notes_page';
import Calculator_Page from './calculator/Calculator';


function App() {
  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/cal' element={<Calendar_Page />} />
          <Route path='/notes' element={<Notes_Page />} />
          <Route path='/calc' element={<Calculator_Page />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
