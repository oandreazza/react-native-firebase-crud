import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { reducer as formReducer } from 'redux-form'
import promise from 'redux-promise-middleware';
import reducers from './reducers'

export default createStore(
  combineReducers({
    appReducers: reducers,
    form: formReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    createLogger(),
    promise(),
    thunk,
  )
)
