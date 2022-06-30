import { React, useState, useCallback } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { isLogged } from './api/auth';
import {
  Home,
  Login,
  Hives,
  Visits,
  Apiaries,
  Settings,
  HiveDetails,
} from './pages';
import AuthContext from './contexts/authContext';

import './App.scss';

const App = function App() {
  const [logged, setLogged] = useState(isLogged());

  const handleLogged = useCallback(() => {
    setLogged(!logged);
  }, [logged]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ logged, handleLogged }}>
      <Routes>
        {!logged ? (
          <Route exact path="/" element={<Login />} />
        ) : (
          <>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/hives" element={<Hives />} />
            <Route path="/hives/:id/*" element={<HiveDetails />} />
            <Route exact path="/visits" element={<Visits />} />
            <Route exact path="/apiaries" element={<Apiaries />} />
            <Route exact path="/setting" element={<Settings />} />
          </>
        )}
        <Route
          exact
          path="*"
          element={<Navigate to={logged ? '/home' : '/'} />}
        />
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
