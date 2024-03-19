import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Splash, Login, NotFound, Register } from './pages';

import './App.css';
import Home from './pages/web/home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
