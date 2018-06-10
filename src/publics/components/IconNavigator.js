import React from 'react';
import { Icon } from 'react-native-elements';

import styles from './stylesComponents';

const handlePressMenu = props => () => {
  props.navigation.openDrawer('DrawerOpen');
};

const handlePressSearch = props => () => {
  // for search button
};

const handlePressSaved = props => () => {
  // for search button
};

export const IconMenu = (props) => {
  return (
    <Icon
      name="menu"
      iconStyle={styles.iconNavigator}
      onPress={handlePressMenu(props)}
    />
  );
};

export const IconSearch = (props) => {
  return (
    <Icon
      name="search"
      iconStyle={styles.iconNavigator}
      onPress={handlePressSearch(props)}
    />
  );
};

export const IconSaved = (props) => {
  return (
    <Icon
      name="move-to-inbox"
      iconStyle={styles.iconNavigator}
      onPress={handlePressSaved(props)}
    />
  );
};
