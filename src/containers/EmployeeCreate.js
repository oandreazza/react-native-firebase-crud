import { connect } from 'react-redux'
import EmployeeCreate from '../components/EmployeeCreate'
import {save} from '../actions'

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    save: (employee) => {
      dispatch(save(employee))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate)
