import { combineReducers } from 'redux'
import authReducer from './AuthReducer'
import employeeReducer from './EmployeeReducer'

export default combineReducers({
  authReducer,
  employeeReducer
})
