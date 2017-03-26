'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Colors from '../stylings/colors'

class StatusbarBG extends Component {

  render () {
      return (
        <View style={styles.StatusbarBG}>
        </View>
      )
  }

}

const styles = StyleSheet.create({
  StatusbarBG: {
    height: 20,
    backgroundColor: Colors.colorSecondary12
  }
});

module.exports = StatusbarBG
