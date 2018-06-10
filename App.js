import React from 'react';
import PropTypes from 'prop-types';
import { BackHandler, ToastAndroid } from 'react-native';
import { createNavigationPropConstructor, initializeListeners } from 'react-navigation-redux-helpers';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, connect } from 'react-redux';

import { persistor, store } from './src/publics/redux/store';
import RootNavigators from './src/publics/navigators/RootNavigators';
import Splash from './src/splash-screen/components/Splash';

const navigationPropConstructor = createNavigationPropConstructor('root');

class AppNavigator extends React.Component {

  constructor() {
    super();
    this.countPressBack = 0;
  }

  componentDidMount() {
    initializeListeners('root', this.props.router);
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  }

  onBackButtonPressAndroid = () => {
    const { dispatch, router } = this.props;
    if (
      (router.index === 1 && router.routes[1].index === 0) ||
      (router.index === 2 && router.routes[2].routes[0].index === 0)
    ) {
      this.countPressBack = this.countPressBack + 1;
      if (this.countPressBack < 2) {
        ToastAndroid.show('Press BACK again to Exit', ToastAndroid.SHORT);
        setTimeout(() => {
          this.countPressBack = 0;
        }, 3000);
      } else {
        return false;
      }
    }
    dispatch({ type: 'Navigation/BACK' });
    return true;
  };

  render() {
    const navigation = navigationPropConstructor(
      this.props.dispatch,
      this.props.router,
    );
    return (
      <RootNavigators
        navigation={navigation}
      />
    );
  }
}

AppNavigator.propTypes = {
  router: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  router: state.router
});

const AppWithNavigationState = connect(mapStateToProps)(AppNavigator);

const App = () => (
  <Provider store={store}>
    <PersistGate
      loading={<Splash />}
      persistor={persistor}
    >
      <AppWithNavigationState />
    </PersistGate>
  </Provider>
);

export default App;
