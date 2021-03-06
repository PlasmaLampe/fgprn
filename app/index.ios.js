/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import StatusListView from './common/screens/statusList/statusList'
import AddRestView from './common/screens/addRest/addRest'
import AddGroupView from './common/screens/addGrp/addGrp'
import StatusbarBG from './common/components/statusbarBackground'
import Homebar from './common/components/homebar'

export default class app extends Component {
  render() {
    return (
        <StatusListView/>
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

AppRegistry.registerComponent('app', () => app);
