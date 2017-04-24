const initialAuth = {
  error: "",
  user: null,
  loading: false
}
const authReducer = (state=initialAuth, action) => {
  switch (action.type) {
    case "AUTH_FAILED":
      const error = action.payload.message
      return {...state, error, loading: false}
    case "AUTH_SUCCESS":
      const user = action.payload
      return {...state, user, error: "", loading: false}
    case "AUTH_START":
      return {...state, loading: true }
    default:
      return state;
  }
}

export default authReducer;
