import React, {Component} from 'react';
import { View, Text} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './store.js';
import Router from './Router.js'
import credentials from './credentials'

class App extends Component{
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    firebase.initializeApp(credentials);
  }

  render() {
    return(
      <Provider store={store} >
        <View style={{flex: 1}}>
          <Router />
        </View>
      </Provider>
    )
  }
}
export default App;
