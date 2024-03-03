import { CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE_FAIL, ADD_EMPLOYEE } from "../actions/employeeActions.jsx";

/* Initial state of authentication */
const initialState = {
    status: "VOID",
    employees: [
        {
            id: "1",
            firstName: "Bruce",
            lastName: "Wayne",
            startDate: "1990-01-01",
            birthdate: "1977-05-15",
            department: "Sales",
            street: "12 Bat St",
            city: "Gotham City",
            state: "IL",
            zipCode: "12345"
        },
        {
            id: "2",
            firstName: "Bruce",
            lastName: "Banner",
            startDate: "2022-04-13",
            birthdate: "1966-01-01",
            department: "Legal",
            street: "34 Hulk St",
            city: "Oklahoma",
            state: "OK",
            zipCode: "67890"
        },
        {
            id: "3",
            firstName: "Peter",
            lastName: "Parker",
            startDate: "2007-02-15",
            birthdate: "1985-08-20",
            department: "HR",
            street: "56 Spider St",
            city: "Human Resources",
            state: "NY",
            zipCode: "13456"
        },
        {
            id: "4",
            firstName: "Clark",
            lastName: "Kent",
            startDate: "2022-02-15",
            birthdate: "1876-04-04",
            department: "Marketing",
            street: "6 Super St",
            city: "New York",
            state: "NY",
            zipCode: "12456"
        },
        {
            id: "5",
            firstName: "Tony",
            lastName: "Stark",
            startDate: "2000-12-05",
            birthdate: "1965-18-09",
            department: "Engineering",
            street: "988 Iron St",
            city: "Los Angeles",
            state: "CA",
            zipCode: "12567"
        }

    ],
    error: null,
}

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                status: "SUCCEEDED",
                error: null, 
                employees: [...state.employees, action.payload]
            }

        case CREATE_EMPLOYEE_FAIL:
            return {
                ...state,
                status: "FAILED",
                error: null,
            }
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }

        default:
            return state;
    }
}
