import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import EmployeesArray from "../../components/EmployeesArray";

export default function CurrentEmployeesPage() {
  
  return (
    <div className="pagesContainer">
      <Link to='/'>
        <button className="redirectionBtn" aria-label="Create new Employee" title="createNewEmployee">Create employee</button>
      </Link>
      <h2>View Employees</h2>
      {/* Données des employés en tant que prop */}
      <EmployeesArray />
    </div>
  );
}
