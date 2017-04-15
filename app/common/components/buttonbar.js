'use strict';

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

class Buttonbar extends Component {

  _onAddRestaurant = () => {

  }

  _onAddGrp = () => {

  }

  render () {
      return (
        <View style={styles.buttonbar}>
          <View style={styles.flexRow}>
            <Button
              onPress={this._onAddGrp}
              title="Add group"
              color={Colors.colorPrimary5}
              accessibilityLabel="Add a new restaurant to the current group"
            />

            <View style={{flex: 1 }}></View>

            <Button
              onPress={this._onAddRestaurant}
              title="Add restaurant to grp"
              color={Colors.colorPrimary5}
              accessibilityLabel="Add a new restaurant to the current group"
            />
            
          </View>
        </View>
      )
  }

}

const styles = StyleSheet.create({
  buttonbar: {
    height: 50,
    backgroundColor: Colors.colorSecondary12
  },

  flexRow: {
    flexDirection: "row",
    marginLeft : 25,
    marginRight: 25,
    height: 40,
    paddingTop: 10
  }
});

module.exports = Buttonbar
