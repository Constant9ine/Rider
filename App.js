import React from 'react';
import { AppLoading } from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import AppContainer from './src/navigation/AppNavigator';
//Database import
import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAeNd4Bwv2pI1ThWNWROzHx-wm1lG4ACzY",
  authDomain: "pickme-907c8.firebaseapp.com",
  databaseURL: "https://pickme-907c8.firebaseio.com",
  projectId: "pickme-907c8",
  storageBucket: "pickme-907c8.appspot.com",
  messagingSenderId: "1097721961226",
  appId: "1:1097721961226:web:ccfc999f3a327f2af6f8f3",
  measurementId: "G-PCKZRMSBL4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  state = {
    assetsLoaded: false,
  };

  constructor(){
    super();
    console.disableYellowBox = true;
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/background.jpg'),
        require('./assets/images/logo.png'),
      ]),
      Font.loadAsync({
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
        
      }),
    ]);
  };

 
  render() {
    return (
        this.state.assetsLoaded ?    
          <AppContainer/>  
          :         
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onFinish={() => this.setState({ assetsLoaded: true })}
            onError={console.warn}
            autoHideSplash={true}
          />
    );
  }
  
  
  
}

