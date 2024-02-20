import React from 'react';
import '../style/App.css';

import { Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import CurrentEmployeesPage from '../pages/CurrentEmployeesPage';
import CreateEmployeePage from '../pages/CreateEmployeePage';
import Logo from '../components/Logo';

export default function App() {
  return (
      <div className="App">
          <Logo />
          <Routes>
            <Route path="/" element={<CreateEmployeePage />} />
            <Route path="/Employees" element={<CurrentEmployeesPage />} />
          </Routes>
      </div>
  );
}
