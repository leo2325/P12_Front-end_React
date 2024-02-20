import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import CreateEmployeeForm from '../../components/CreateEmployeeForm';
import '../../style/pages.css'

export default function CreateEmployeePage() {
    
  return (
    <div className="pagesContainer">
      <Link to='/Employees'>
        <button className="redirectionBtn">View employees</button>
      </Link>
      <h2>Create Employee</h2>
      <CreateEmployeeForm />
    </div>
  );
};
