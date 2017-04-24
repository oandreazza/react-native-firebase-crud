const INITIAL_STATE = {
  loading: true
}

const employeeReducer = ( state= INITIAL_STATE, action) => {
  switch (action.type) {
    case "EMPLOYEES_FULFILLED":
      let employees = action.payload
      return {...state, employees, loading:false}
    case "EMPLOY_FULFILLED":
      return {...state, employee: action.payload}
    default:
      return state;
  }
}

export default employeeReducer;
