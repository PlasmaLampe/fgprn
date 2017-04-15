'use strict';

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ListView,
  AlertIOS,
  TextInput
} from 'react-native';

import StatusbarBG from '../../components/statusbarBackground'
import Homebar from '../../components/homebar'
import Buttonbar from '../../components/buttonbar'
import MockStores from '../../models/store'
import Colors from '../../stylings/colors'


class AddRestView extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      name: 'Useless Placeholder',
      city: 'Köln',
      street: 'ABC Straße 7',
      zip: '51065'
    };
  }

  _onAddRestToGrp = () => {

  }

  render () {
      return (
        <View style={styles.AddRestView}>
          <StatusbarBG />
          <Homebar />

          <Text style={styles.label}>Name</Text>
          <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}
          />

          <Text style={styles.label}>Street</Text>
          <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({street: text})}
          value={this.state.street}
          />

          <Text style={styles.label}>City</Text>
          <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({city: text})}
          value={this.state.city}
          />

          <Text style={styles.label}>Zip Code</Text>
          <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({zip: text})}
          value={this.state.zip}
          />

          <Button
            onPress={this._onAddRestToGrp}
            title="Create new restaurant"
            color={Colors.colorSecondary15}
            accessibilityLabel="Add a new restaurant to the current group"
          />

          <Buttonbar />
        </View>
      )
  }

}

const styles = StyleSheet.create({
  AddRestView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "white"
  },

  label: {
    marginTop: 10,
    marginLeft : 25,
    marginRight: 25
  },

  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginLeft : 25,
    marginRight: 25
  },

  headerline: {
    marginLeft: 25,
    marginRight: 25,
    fontSize: 16,
    marginTop: 10
  }
});

module.exports = AddRestView
