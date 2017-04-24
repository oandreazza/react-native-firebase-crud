import _ from 'lodash';
import { connect } from 'react-redux'
import EmployeeList from '../components/EmployeeList'
import {fecthEmployees} from '../actions'

const mapStateToProps = (state) => {
    const {employees} = state.appReducers.employeeReducer;
    const employeesArray = _.map(employees, (val, id) => {
      return {...val, id}
    });
    return {
      employees: employeesArray,
      loading: state.appReducers.employeeReducer.loading
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fecthEmployees: () => {
      dispatch(fecthEmployees())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)
