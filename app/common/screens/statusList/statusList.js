'use strict';

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  AlertIOS
} from 'react-native';

import StatusbarBG from '../../components/statusbarBackground'
import Homebar from '../../components/homebar'
import MockStores from '../../models/store'


class StatusListView extends Component {

  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});

    this.state = {
      stores : ds.cloneWithRows([])
    }


    // load store info from backend
    fetch("http://localhost:3000/store", {method: "GET"})
    .then((response) => {
      var data = response.json()
      return data;
    })
    .then((responseData) => {

      this.setState({
           //dataSource: this.state.dataSource.cloneWithRows(newArray),
           //db: newArray,
           stores: this.state.stores.cloneWithRows(responseData)
       });

    })
    .done();

  }

  _renderStoreRow(store) {
    return (
      <TouchableOpacity
          onPress={() => { this._onStorePress(store) }}
          style={styles.storeRow}>

        <Text>{store.name}</Text>

        <View style={{flex: 1 }}></View>

        <Icon name="chevron-right" style={styles.storeInfoButton}/>
      </TouchableOpacity>
    )
  }

  _onStorePress(store) {
    console.log(store)
  }

  render () {
      return (
        <View style={styles.StatusListView}>
          <StatusbarBG />
          <Homebar />

          <ListView
            style={{marginTop: 20}}
            dataSource={this.state.stores}
            renderRow={(store) => { return this._renderStoreRow(store)} }>
          </ListView>
        </View>
      )
  }

}

const styles = StyleSheet.create({
  StatusListView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "white"
  },

  storeRow: {
    flexDirection: "row",
    marginLeft : 25,
    marginRight: 25,
    height: 40,
    paddingTop: 10
  },

  storeName: {

  },

  headerline: {
    marginLeft: 25,
    marginRight: 25,
    fontSize: 16,
    marginTop: 10
  },

  storeInfoButton: {
    color: 'navy',
    width: 10,
    height: 10
  }
});

module.exports = StatusListView
