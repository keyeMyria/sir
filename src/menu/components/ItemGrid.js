import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import styles from '../stylesMenu';
import labelAvatar from '../../publics/utils/labelAvatar';
import randomColorStr from '../../publics/utils/randomColorStr';

class ItemGrid extends Component {

  componentDidMount() {

  }

  render() {
    const { name, price } = this.props.item;
    return (
      <TouchableOpacity style={[styles.itemGrid, { backgroundColor: `#${randomColorStr(name)}` }]}>
        <Text style={styles.textAvatar}>{labelAvatar(name)}</Text>
        <View style={styles.infoProduct}>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.textPrice}>{price}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

ItemGrid.propTypes = {
  item: PropTypes.object.isRequired
};

export default connect()(ItemGrid);
