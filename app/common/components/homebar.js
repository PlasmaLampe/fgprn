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

class Homebar extends Component {

  _onVotePress = () => {

  }

  _onSeeMorePress = () => {

  }

  render () {
      return (
        <View style={styles.homebar}>
          <View style={styles.flexRow}>
            <Text style={styles.currentDayLabel}>
              Current Day
            </Text>

            <View style={{flex: 1 }}></View>

            <Button
              onPress={this._onVotePress}
              title="Vote"
              color="navy"
              accessibilityLabel="Vote for a new restaurant"
            />

            <TouchableOpacity
                onPress={() => { this._onSeeMorePress() }}>

              <Icon name="chevron-down" style={styles.detailInfoButton}/>
            </TouchableOpacity>
          </View>
        </View>
      )
  }

}

const styles = StyleSheet.create({
  homebar: {
    height: 50
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
  },

  detailInfoButton: {
    paddingTop: 10,
    marginLeft : 25,
    marginTop: 0,
    fontSize: 16
  }
});

module.exports = Homebar
