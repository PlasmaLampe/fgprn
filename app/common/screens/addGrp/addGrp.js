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


class AddGroupView extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      name: 'Group name',
      desc: 'A short description of the group'
    };
  }

  _onCreateGrp = () => {

  }

  render () {
      return (
        <View style={styles.addGroupView}>
          <StatusbarBG />
          <Homebar />

          <Text style={styles.label}>Name</Text>
          <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({desc: text})}
          value={this.state.desc}
          />

          <Button
            onPress={this._onCreateGrp}
            title="Create new group"
            color={Colors.colorSecondary15}
            accessibilityLabel="Add a new group"
          />

          <Buttonbar />
        </View>
      )
  }

}

const styles = StyleSheet.create({
  addGroupView: {
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

module.exports = AddGroupView
