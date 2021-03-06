'use strict';

import moment from 'moment';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../stylings/colors'

class Homebar extends Component {

  _onLastChoicesPress = () => {

  }

  _getCurrentDay = () => {
      return moment().format('dddd');
  } 

  render () {
      return (
        <View style={styles.homebar}>
          <View style={styles.flexRow}>
            <Text style={styles.currentDayLabel}>
              {this._getCurrentDay()}
            </Text>

            <View style={{flex: 1 }}></View>

            <Button
              onPress={this._onLastChoicesPress}
              title="Last choices"
              color={Colors.colorSecondary15}
              accessibilityLabel="Vote for a new restaurant"
            />
          </View>
        </View>
      )
  }

}

const styles = StyleSheet.create({
  homebar: {
    height: 50,
    backgroundColor: Colors.colorSecondary12
  },

  flexRow: {
    flexDirection: "row",
    marginLeft : 25,
    marginRight: 25,
    height: 40,
    paddingTop: 10
  },

  currentDayLabel: {
    paddingTop: 10,
    marginTop: 0,
    fontSize: 16
  }
});

module.exports = Homebar
