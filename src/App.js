import React, {Component} from 'react';
import { View, Text} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './store.js';
import Router from './Router.js'

class App extends Component{
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    const config = {
      apiKey: "AIzaSyDi0GXnRo2n5SbWCDt4oFdDPgqYRI0vqj4",
      authDomain: "manager-ec272.firebaseapp.com",
      databaseURL: "https://manager-ec272.firebaseio.com",
      projectId: "manager-ec272",
      storageBucket: "manager-ec272.appspot.com",
      messagingSenderId: "616480915120"
    };
    firebase.initializeApp(config);
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
