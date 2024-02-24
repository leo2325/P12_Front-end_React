import React, { useState } from "react";
import { connect } from 'react-redux';
import { createEmployeeSuccess } from '../../redux/actions/employeeActions';
import { useNavigate } from 'react-router-dom';

function CreateEmployeeForm({ createEmployeeSuccess }) {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            firstName,
            lastName,
            StartDate: startDate,
            BirthDate: birthdate,
            Department: department,
            Street: street,
            City: city,
            State: state,
            ZipCode: zipCode
        };

        createEmployeeSuccess(newEmployee);
        navigate('/Employees');


        setFirstName('');
        setLastName('');
        setBirthdate(new Date());
        setStartDate(new Date());
        setStreet('');
        setCity('');
        setState('');
        setZipCode('');
        setDepartment('');

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstname">Firstname</label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Lastname</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="birthdate">Birthdate</label>
                    <input
                        type="date"
                        id="birthdate"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="startdate">Startdate</label>
                    <input
                        type="date"
                        id="startdate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="street">Street</label>
                    <input
                        type="text"
                        id="street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="state">State</label>
                    <input
                        type="text"
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="zipcode">Zipcode</label>
                    <input
                        type="text"
                        id="zipcode"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="department">Department</label>
                    <input
                        type="text"
                        id="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    createEmployeeSuccess: (employee) => dispatch(createEmployeeSuccess(employee))
});

export default connect(null, mapDispatchToProps)(CreateEmployeeForm);
