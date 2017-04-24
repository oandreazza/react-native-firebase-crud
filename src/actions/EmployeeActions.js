import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

export const save = ( employee ) => {
  return (dispatch) => {
    const {currentUser} = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees/`).push(employee)
      .then(() => Actions.employeeList( { type: 'reset' }) )
  }
}

export const fecthEmployees = () => {
  return (dispatch) => {
    dispatch({ type: "EMPLOYEES_FETCH" });
    const {currentUser} = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees/`)
      .on("value", (snapshot) => {
        dispatch( { type: "EMPLOYEES_FULFILLED", payload: snapshot.val()})
      });
  }
}

export const findEmployee = ( employeeId ) => {
  return (dispatch) => {
    const {currentUser} = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees/${employeeId}/`)
      .on("value", (snapshot) => {
        dispatch( { type: "EMPLOY_FULFILLED", payload: snapshot.val()})
      });
  }
}

export const updateEmployee = ( employee, employeeId) => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${employeeId}/`)
      .set({
        name: employee.name,
        phone: employee.phone,
        shift: employee.shift
      })
      .then( () => Actions.employeeList( { type: 'reset' }) )
  }
}

export const deteleEmployee = ( employeeId ) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/employees/${employeeId}`)
        .remove()
        .then( () => Actions.employeeList( { type: 'reset' }) )
      }
}
