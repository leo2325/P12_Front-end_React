import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// imports des plugins
import DatePicker from 'react-date-picker';
import Plugin from 'simple-component-library_react-modale-plugin_leo-timbert';
// imports des listes select
import statesList from '../../data/statesList.js';
import departmentList from '../../data/departmentList.js';
import { createEmployeeSuccess, createEmployeeFailed } from '../../redux/actions/employeeActions.jsx';
// imports des styles
import '../../style/pages.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function CreateEmployeeForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState('');
    
    const [modale, setModaleVisibility] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const employees = useSelector(state => state.employee.employees);

    const submit = async (e) => {
        e.preventDefault();
        if (firstName && lastName && birthdate && startDate && street && city && state && zipCode && department) {
            const formattedBirthdate = birthdate.toLocaleDateString();
            const formattedStartDate = startDate.toLocaleDateString();

            const uniqueId = employees.length + 1;

            dispatch(createEmployeeSuccess({
                id: uniqueId,
                firstName,
                lastName,
                birthdate: formattedBirthdate,
                startDate: formattedStartDate,
                street,
                city,
                state,
                zipCode,
                department
            }));
            setModaleVisibility(true);

            // vérification des données du nouvel employé + vérification de l'intégral du tableau d'employés.
            console.log(employees);
            console.log("Dernier employé ajouté:" + firstName, lastName, birthdate, startDate, street, city, state, zipCode, department);

        } else {
            dispatch(createEmployeeFailed('Veuillez remplir tous les champs du formulaire'));
        }
    };

    return (
        <div>
            <form onSubmit={submit}>
                { modale && <Plugin 
                    message="Employee created !" 
                    closeFunction={ ( ) => navigate('/Employees') } /> 
                }
                <section id="userName">
                    <div className="edit-input">
                        <label htmlFor="firstname"></label>
                        <input
                            type="text"
                            id="firstname"
                            placeholder='Firstname'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="edit-input">
                        <label htmlFor="lastname"></label>
                        <input
                            type="text"
                            id="lastname"
                            placeholder='Lastname'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="edit-input editDate-input">
                        <label htmlFor="birthdate">Birthdate</label>
                        <DatePicker
                            onChange={date => setBirthdate(date)}
                            value={birthdate}
                        />
                    </div>
                    <div className="edit-input editDate-input">
                        <label htmlFor="startdate">Startdate</label>
                        <DatePicker
                            onChange={date => setStartDate(date)}
                            value={startDate}
                        />
                    </div>
                </section>

                <section id="userAdress">
                    <h3>Address</h3>
                    <div className="edit-input">
                        <label htmlFor="street"></label>
                        <input
                            type="text"
                            id="street"
                            placeholder='Street'
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                        />
                    </div>
                    <div className="edit-input">
                        <label htmlFor="city"></label>
                        <input
                            type="text"
                            id="city"
                            placeholder='City'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="edit-input">
                        <label htmlFor="state" aria-label="state"></label>
                        <select
                            type="text"
                            id="state"
                            value={state}
                            aria-labelledby="state"
                            onChange={(e) => setState(e.target.value)}
                        >
                            {statesList.map((state, index) => (
                                <option
                                    key={index}
                                    value={state.abbreviation}
                                >
                                    {state.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="edit-input">
                        <label htmlFor="zipcode"></label>
                        <input
                            type="number"
                            id="zipcode"
                            min={10000}
                            max={99999}
                            placeholder='Zip code'
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />
                    </div>
                </section>

                <section id="userDepartment">
                    <h3>Department : </h3>

                    <div className="edit-input">
                        <label htmlFor="department" aria-label="department"></label>
                        <select
                            type="text"
                            id="department"
                            value={department}
                            aria-labelledby="department"
                            onChange={(e) => setDepartment(e.target.value)}
                        >
                            {departmentList.map((department, index) => (
                                <option
                                    key={index}
                                    value={department.name}
                                >
                                    {department.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>

                <button
                    type="submit"
                    name="submit"
                    id="submit"
                    aria-label="submit new employee"
                >
                    Submit
                </button>

            </form>
        </div>
    );
}

export default CreateEmployeeForm;
