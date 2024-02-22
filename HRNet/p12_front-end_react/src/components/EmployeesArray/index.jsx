import React from "react";
import { DataTable } from "react-data-tables-plugin";
import { Link, useNavigate } from 'react-router-dom';
import '../../style/pages.css'

const EmployeesArray = ({ employees }) => {
    
    const columns = [
        {
            title: "First Name",
             data: "firstName",
        },
        {
            title: "Last Name",
            data: "lastName",
        },
        {
            title: "Start Date",
            data: "StartDate",
        },
        {
            title: "Date of Birth",
            data: "BirthDate",
        },
        {
            title: "Department",
            data: "Department",
        },
        {
            title: "Street",
            data: "Street",
        },
        {
            title: "City",
            data: "City",
        },
        {
            title: "State",
            data: "State",
        },
        {
            title: "Zip Code",
            data: "ZipCode",
        },
    ];


    const data = [
        {
            id: "1",
            firstName: "John",
            lastName: "Doe",
            StartDate: "",
            BirthDate: "",
            Department: "Sale",
            Street:"1",
            City:"Paris",
            State: "AL",
            ZipCode: "75001",
          
        },
        {
            id: "2",
            firstName: "Jane",
            lastName: "Smith",
            StartDate: "",
            BirthDate: "",
            Department: "Legal",
            Street:"2",
            City:"New York",
            State: "DC",
            ZipCode: "002",
          
        },
      ];

    return (
        
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    
    );
  }
  
  export default EmployeesArray;
