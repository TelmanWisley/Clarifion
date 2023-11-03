import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from 'Constants';
import { DashboardPage } from 'pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
