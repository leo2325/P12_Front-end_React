import React from "react";

import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo'
// Import du tableau statesList
import statesList from '../../data/statesList.js';

import '../../style/pages.css'

function CreateEmployee() {
    return (
      <div className="pageContaine">
        <header className="page-header">
            <Logo />
            <Link to='/Employees'>
                <button>View current employees</button>
            </Link>
        </header>
        <body>
            <form>
                <h2>Create Employee</h2>
                <section id="userName">
                    <div className="edit-input">
                        <label htmlFor="firstname"></label>
                        <input
                            type="text"
                            id="firstname" 
                            placeholder= 'Firstname'
                            //onChange={(e) => setFirstName(e.target.value)}
                        />     
                    </div>
                    <div className="edit-input">
                        <label htmlFor="lastname"></label>
                        <input
                            type="text"
                            id="lastname" 
                            placeholder= 'Lastname'
                            //onChange={(e) => setLastName(e.target.value)}
                        />     
                    </div>
                    <div className="edit-input">
                        <label htmlFor="birthdate"></label>
                        <input
                            type="date"
                            id="birthdate" 
                            placeholder= 'Date of birth'
                            //onChange={(e) => setBirthDate(e.target.value)}
                        />     
                    </div>
                    <div className="edit-input">
                        <label htmlFor="startdate"></label>
                        <input
                            type="date"
                            id="startdate" 
                            placeholder= 'Start date'
                            //onChange={(e) => setStartDate(e.target.value)}
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
                                //onChange={(e) => setStreet(e.target.value)}
                            />     
                        </div>
                        <div className="edit-input">
                            <label htmlFor="city"></label>
                            <input
                                type="text"
                                id="city" 
                                placeholder= 'City'
                                //onChange={(e) => setCity(e.target.value)}
                            />     
                        </div>
                        <div className="edit-input">
                            <label htmlFor="state"></label>
                            <select
                                type="text"
                                id="state" 
                                //onChange={(e) => setState(e.target.value)}
                            >
                                {/* map() pour génére une option pour chaque état */}
                                {statesList.map((state, index) => (
                                    <option key={index} value={state.abbreviation}>{state.name}</option>
                                ))}
                            </select>     
                        </div>
                        <div className="edit-input">
                            <label htmlFor="zipcode"></label>
                            <input
                                type="text"
                                id="zipcode" 
                                placeholder= 'Zip code'
                                //onChange={(e) => setSZipCode(e.target.value)}
                            />     
                        </div>
                </section>

                <section id="userDepartment">
                    <h3>Department : </h3>
                        
                    <div className="edit-input">
                        <label htmlFor="department"></label>
                        <input
                            type="text"
                            id="department" 
                            placeholder= 'Department'
                            //onChange={(e) => setDepartment(e.target.value)}
                        />     
                    </div>
                </section>   
            </form>
        </body>
        <footer>

        </footer>
      </div>
    );
  }
  
  export default CreateEmployee;