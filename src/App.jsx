import React from 'react';
import './App.scss';
import { Home } from './pages/Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
