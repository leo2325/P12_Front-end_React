import React, { useState } from "react";
import DatePicker from 'react-date-picker';
// Import du tableau statesList
import statesList from '../../data/statesList.js';
import departmentList from '../../data/departmentList.js';
import '../../style/pages.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function CreateEmployeeForm() {
    const [birthdate, setBirthdate] = useState(new Date()); // État pour stocker la date de naissance sélectionnée
    const [startDate, setStartDate] = useState(new Date()); // État pour stocker la date sélectionnée

    return (
      <div>
            <form>
               
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
                    <div className="edit-input editDate-input">
                        <label htmlFor="birthdate">Birthdate</label>
                        <DatePicker
                            onChange={setBirthdate} // Utilisation de la fonction de mise à jour de l'état pour mettre à jour la valeur de la date de naissance
                            value={birthdate} // Utilisation de la valeur de l'état comme valeur du DatePicker
                        />
                    </div>
                    <div className="edit-input editDate-input">
                        <label htmlFor="startdate">Startdate</label>
                        <DatePicker
                            onChange={setStartDate} // Utilisation de la fonction de mise à jour de l'état pour mettre à jour la valeur de la date
                            value={startDate} // Utilisation de la valeur de l'état comme valeur du DatePicker
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
                                //onChange={(e) => setSZipCode(e.target.value)}
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
                                //onChange={(e) => setDepartment(e.target.value)}
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