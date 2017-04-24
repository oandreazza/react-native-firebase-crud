import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import {login} from '../actions'

const mapStateToProps = (state) => {
    return {
      auth: state.appReducers.authReducer
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credential) => {
      dispatch(login(credential))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
