import { CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE_FAIL } from "../actions/employeeActions.jsx";
import EmployeesList from "../../data/EmployeesList.json";

/* Initial state of authentication */
const initialState = {
    status: "VOID",
    employees: EmployeesList,
    error: null,
}

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                status: "SUCCEEDED",
                error: null, 
                employees: [...state.employees, action.payload.employee]
            }

        case CREATE_EMPLOYEE_FAIL: {
            return {
                ...state,
                status: "FAILED",
                error: null,
            }
        }
        default:
            return state;
    }
}