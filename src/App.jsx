import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Page404 } from './pages';

import './App.scss';

const App = function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="*" element={<Page404 />} />
    </Routes>
  );
};

export default App;
