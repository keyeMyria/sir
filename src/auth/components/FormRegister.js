import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Field, reduxForm } from 'redux-form';

import styles from '../stylesAuth';
import InputText from '../../publics/components/redux-form/InputText';

const FormLogin = props => (
  <View>
    <Field
      name="business_name"
      component={InputText}
      label="Name of business"
    />
    <Field
      name="email"
      component={InputText}
      label="Email"
    />
    <Field
      name="password"
      component={InputText}
      label="Password"
      secureTextEntry
    />
    <Button
      title="REGISTER"
      backgroundColor="#666"
      color="#fffefe"
      containerViewStyle={styles.buttonLogin}
      onPress={props.handleSubmit}
    />
  </View>
);

FormLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const initialForm = {
  form: 'register',
  initialValues: {
    business_name: 'Bakso',
    email: 'test_account@gmail.com',
    password: '2wsx3edc'
  }
};

export default reduxForm(initialForm)(FormLogin);

