import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
export const login = (credential) => {
  return (dispatch) => {
    dispatch({ type: "AUTH_START" })
    firebase.auth().signInWithEmailAndPassword(credential.email, credential.password)
      .then( user => {
        dispatch({ type: "AUTH_SUCCESS", payload: user});
        Actions.main();
      })
      .catch( error => {
        dispatch({ type: "AUTH_FAILED", payload: error})
      })
  }
}
