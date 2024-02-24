import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// Import du plugIn gestionnaire de dates
import DatePicker from 'react-date-picker';
// Import des datas menus déroulants
import statesList from '../../data/statesList.js';
import departmentList from '../../data/departmentList.js';
// Import des actions employés
import { createEmployeeSuccess, createEmployeeFailed } from '../../redux/actions/employeeActions.jsx'
import { useStore } from "react-redux";
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

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submit = async(e) => {
        e.preventDefault();
        // si les champs sont tous remplis
        if(firstName && lastName && birthdate && startDate && street && city && state && zipCode && department) {

            const formattedBirthdate = birthdate.toLocaleDateString();
            const formattedStartDate = startDate.toLocaleDateString();

            dispatch(createEmployeeSuccess({
                firstName,
                lastName,
                birthdate: formattedBirthdate, // Utilisation des chaînes de caractères formatées
                startDate: formattedStartDate, // Utilisation des chaînes de caractères formatées
                street,
                city,
                state,
                zipCode,
                department
            }));            // Appelé le plugin modal
            console.log(firstName, lastName, birthdate, startDate, street, city, state, zipCode, department)
            navigate('/Employees');
        }
        else {
            dispatch(createEmployeeFailed(console.log('Veuillez remplir tout les champs du formulaire')));
        }
    }

    return (
      <div>
            <form onSubmit={submit}>
               
                <section id="userName">
                    <div className="edit-input">
                        <label htmlFor="firstname"></label>
                        <input
                            type="text"
                            id="firstname" 
                            placeholder= 'Firstname'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />     
                    </div>
                    <div className="edit-input">
                        <label htmlFor="lastname"></label>
                        <input
                            type="text"
                            id="lastname" 
                            placeholder= 'Lastname'
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
                                placeholder= 'Street'
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                            />     
                        </div>
                        <div className="edit-input">
                            <label htmlFor="city"></label>
                            <input
                                type="text"
                                id="city" 
                                placeholder= 'City'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />     
                        </div>
                        <div className="edit-input">
                            <label htmlFor="state"></label>
                            <select
                                type="text"
                                id="state" 
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            >
                                {/* map() pour génére une option pour chaque état */}
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
                                placeholder= 'Zip code'
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                            />     
                        </div>
                </section>

                <section id="userDepartment">
                    <h3>Department : </h3>

                    <div className="edit-input">
                            <label htmlFor="dpartment"></label>
                            <select
                                type="text"
                                id="department"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            >
                                {/*map() pour générer une option pour chaque departement */}
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
                
                {/* Intégrer ici le bouton submit*/}
                <button 
                    type="submit" 
                    name="submit" 
                    id="submit"
                >
                    Submit
                </button>

            </form>
      </div>
    );
  }
  
  export default CreateEmployeeForm;