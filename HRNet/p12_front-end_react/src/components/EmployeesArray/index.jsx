import React, { useEffect, useState } from "react";
import { DataTable } from "react-data-tables-plugin";
import { useSelector } from 'react-redux';
import '../../style/pages.css';

const EmployeesArray = () => {
    
    // Charger les données initiales depuis le localStorage ou initialiser avec un tableau vide
    const [storedData, setStoredData] = useState(() => {
        const savedData = JSON.parse(localStorage.getItem("employeesData")) || [];
        return savedData;
    });

    // Utiliser useSelector pour extraire la liste d'employés du state Redux
    const employees = useSelector(state => state.employee.employees);

    // Mettre à jour storedData lorsque les employés changent
    useEffect(() => {
        setStoredData(employees);
    }, [employees]);

    // Mettre à jour le localStorage à chaque changement de données - à retoucher si on utilise un backend
    useEffect(() => {
        localStorage.setItem("employeesData", JSON.stringify(storedData));
    }, [storedData]);

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
            data: "startDate",
        },
        {
            title: "Date of Birth",
            data: "birthdate",
        },
        {
            title: "Department",
            data: "department",
        },
        {
            title: "Street",
            data: "street",
        },
        {
            title: "City",
            data: "city",
        },
        {
            title: "State",
            data: "state",
        },
        {
            title: "Zip Code",
            data: "zipCode",
        },
    ];

    return (
        <div>
            <DataTable columns={columns} data={storedData} />
        </div>
    );
}

export default EmployeesArray;
