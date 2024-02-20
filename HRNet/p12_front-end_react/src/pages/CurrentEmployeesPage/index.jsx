import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import CurrentEmployeesArray from "../../components/CurrentEmployeesArray";
import EmployeesList from "../../data/EmployeesList.json"; // Importez les données des employés

export default function CurrentEmployeesPage() {
  
  return (
    <div className="pagesContainer">
      <Link to='/'>
        <button className="redirectionBtn">Create employee</button>
      </Link>
      <h2>View Employees</h2>
      {/* Données des employés en tant que prop */}
      <CurrentEmployeesArray employees={EmployeesList} />
    </div>
  );
}
