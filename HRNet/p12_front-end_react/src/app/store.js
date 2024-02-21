import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { employeeReducer } from '../redux/reducers/authReducer';
import { arrayReducer } from '../redux/reducers/userReducer';

// Combine reducers
const rootReducer = combineReducers({
  employee: employeeReducer,
  array: arrayReducer,
});

// Create store
export const store = configureStore({
  reducer: rootReducer,
});