/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }

  handlePress = (arr) => (ar) => {
    alert(ar);
  }

  render() {
    const array = [
      'satu', 'dua', 'tiga'
    ];
    return (
      <View style={styles.container}>
        {this.state.visible ? (
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
        ) : null}
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        {array.map(arr => (
          <TouchableOpacity ref="touch" onPress={this.handlePress(arr)}>
            <Text>Press bro</Text>
          </TouchableOpacity>
        ))}
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}
