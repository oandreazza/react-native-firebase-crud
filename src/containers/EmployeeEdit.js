import { connect } from 'react-redux';
import EmployeeEdit from '../components/EmployeeEdit';
import {findEmployee, updateEmployee, deteleEmployee} from '../actions'


const mapStateToProps = (state) => {
  return {
    employee: state.appReducers.employeeReducer.employee
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findEmployee: (employeeId) => {
      dispatch(findEmployee(employeeId))
    },
    updateEmployee: (employee, employeeId) => {
      dispatch(updateEmployee(employee, employeeId))
    },
    fireEmployee: (employeeId) => {
      dispatch(deteleEmployee(employeeId))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(EmployeeEdit)
