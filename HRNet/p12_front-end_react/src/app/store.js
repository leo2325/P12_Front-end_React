import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { employeeReducer } from '../redux/reducers/employeeReducer'; 

// Combine reducers
const rootReducer = combineReducers({
  employee: employeeReducer, 
});

// Create store
export const store = configureStore({
  reducer: rootReducer,
});