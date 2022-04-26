import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Page404 } from 'pages';
import { Header, Footer } from 'components';

import './App.scss';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Page404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
