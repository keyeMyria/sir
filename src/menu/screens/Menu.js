/**
 * Sample React Native Menu
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';

import styles from '../stylesMenu';
import data from '../seederProducts.json';
import ItemGrid from '../components/ItemGrid';

type Props = {};
class Menu extends Component<Props> {

  constructor() {
    super();
    this.state = {
      flatList: {
        selected: (new Map(): Map<string, boolean>)
      }
    };
  }

  _renderItem = ({ item }) => <ItemGrid item={item} />;

  _keyExtractor = (item, index) => item.name;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          numColumns={3}
          extraData={this.state.flatList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default connect()(Menu);

