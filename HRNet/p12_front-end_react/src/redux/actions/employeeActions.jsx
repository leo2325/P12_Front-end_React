export const CREATE_EMPLOYEE_SUCCESS = "CREATE_EMPLOYEE_SUCCESS";
export const CREATE_EMPLOYEE_FAIL = "CREATE_EMPLOYEE_FAIL";

export const createEmployeeSuccess = (token) => {
    return {
        type: CREATE_EMPLOYEE_SUCCESS,
    }
}
export const createEmployeeFailed = (error) => {
    return {
        type: CREATE_EMPLOYEE_FAIL,
    }
}