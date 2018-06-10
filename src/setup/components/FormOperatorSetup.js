import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Field, reduxForm } from 'redux-form';

import styles from '../stylesSetup';
import InputText from '../../publics/components/redux-form/InputText';
import { required, minLength6 } from '../../publics/utils/validationForm';

const FormOperator = (props) => {
  let pin = null;

  const refPin = () => (ref) => {
    const refs = ref;
    pin = refs;
  };

  const refSubmitName = () => () => pin.focus();

  const refSubmitPin = () => props.handleSubmit;

  return (
    <View>
      <Field
        autoFocus
        name="name"
        component={InputText}
        label="Operator Name"
        validate={[required]}
        returnKeyType="next"
        disabled={props.operators.isLoading}
        onSubmitEditing={refSubmitName()}
      />
      <Field
        keyboardType="numeric"
        maxLength={6}
        name="pin"
        component={InputText}
        label="PIN"
        validate={[required, minLength6]}
        onRef={refPin()}
        returnKeyType="done"
        disabled={props.operators.isLoading}
        onSubmitEditing={refSubmitPin()}
      />
      <Button
        title="Create"
        backgroundColor="#666"
        color="#fffefe"
        disabled={props.operators.isLoading}
        loading={props.operators.isLoading}
        containerViewStyle={styles.buttonCreate}
        onPress={props.handleSubmit}
      />
    </View>
  );
};

FormOperator.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  operators: PropTypes.object.isRequired
};

const initialForm = {
  form: 'operator'
};

export default reduxForm(initialForm)(FormOperator);

