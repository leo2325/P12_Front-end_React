import React from "react";
import { Link } from 'react-router-dom';
import EmployeesArray from "../../components/EmployeesArray";

export default function CurrentEmployeesPage() {
  
  return (
    <div className="pagesContainer">
      <Link to='/'>
        <button className="redirectionBtn" aria-label="Create Employee" title="create Employee">Create employee</button>
      </Link>
      <h2>View Employees</h2>
      {/* Données des employés en tant que prop */}
      <EmployeesArray />
    </div>
  );
}
