import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../../style/pages.css'

const CurrentEmployeesArray = ({ employees}) => {
    return (
      <div> 
       <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead> 
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.FirstName}</td>
              <td>{employee.LastName}</td>
              <td>{employee.StartDate}</td>
              <td>{employee.Department}</td>
              <td>{employee.DateOfBirth}</td>
              <td>{employee.Street}</td>
              <td>{employee.City}</td>
              <td>{employee.State}</td>
              <td>{employee.ZipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
  
  export default CurrentEmployeesArray;
