import { CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE_FAIL, ADD_EMPLOYEE } from "../actions/employeeActions.jsx";

/* Initial state of authentication */
const initialState = {
    status: "VOID",
    employees: [],
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
