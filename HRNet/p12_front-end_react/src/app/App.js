import React from 'react';
import '../style/App.css';

import { Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import ViewEmployees from '../components/ViewEmployees';
import CreateEmployee from '../components/CreateEmployee';

export default function App() {
  return (
      <div className="App">
          <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/Employees" element={<ViewEmployees />} />
          </Routes>
      </div>
  );
}
