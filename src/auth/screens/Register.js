/**
 * Sample React Native Login
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from '../stylesAuth';
import FormRegister from '../components/FormRegister';
import { createSetting } from '../../settings/actionSettings';

const handleSubmit = props => (value) => {
  props.dispatch(createSetting({ user: value }));
  props.navigation.dispatch({
    type: 'Navigation/RESET',
    key: 'AuthorizedStack',
    index: 0,
    actions: [{
      type: 'Navigation/NAVIGATE',
      routeName: 'MainDrawer'
    }]
  });
};

const Login = props => (
  <View style={styles.container}>
    <FormRegister
      {...this.props}
      onSubmit={handleSubmit(props)}
    />
  </View>
);

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(Login);

