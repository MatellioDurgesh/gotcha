/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene,Stack } from 'react-native-router-flux';

import HomeScreen from './src/views/HomeScreen'
import AddNoteScreen from './src/views/AddNoteScreen'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
console.disableYellowBox = true;
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

<Router navigationBarStyle={{ backgroundColor: '#4CAF50' }}>
    <Scene key="root">
      <Scene key="home" component={HomeScreen} title="Home" initial
          hideNavBar/>
      <Scene key="addNote" component={AddNoteScreen} title="Add Notes"
      //onRight={ ()=>alert('hello!')}
      headerTintColor="white"
      //rightButtonImage={require('./src/images/notepad.png')}
      />
    </Scene>
  </Router>

    //   <Router>
    //   <Scene key="root">
    //     <Scene key="home"
    //       component={HomeScreen}
    //       title="Home"
    //       initial
    //       hideNavBar
    //     />
    //     <Scene
    //       key="addNote"
    //       component={AddNoteScreen}
    //       title="Add Notes"
    //     />
    //   </Scene>
    // </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
