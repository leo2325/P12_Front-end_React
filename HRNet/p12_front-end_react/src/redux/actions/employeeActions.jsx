export const CREATE_EMPLOYEE_SUCCESS = "CREATE_EMPLOYEE_SUCCESS";
export const CREATE_EMPLOYEE_FAIL = "CREATE_EMPLOYEE_FAIL";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";

export const createEmployeeSuccess = (employee) => {
    return {
        type: CREATE_EMPLOYEE_SUCCESS,
        payload: employee,
    }
}

export const createEmployeeFailed = (error) => {
    return {
        type: CREATE_EMPLOYEE_FAIL,
        payload: error,
    }
}

export const addEmployee = (employee) => {
    return {
        type: ADD_EMPLOYEE,
        payload: employee,
    }
}


