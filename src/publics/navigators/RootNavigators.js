import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';

import Drawer from '../components/Drawer';
import { IconMenu, IconSearch, IconSaved } from '../components/IconNavigator';

import Login from '../../auth/screens/Login';
import Register from '../../auth/screens/Register';
import SplashScreen from '../../splash-screen/screens/SplashScreen';
import Menu from '../../menu/screens/Menu';
import Selected from '../../selected/screens/Selected';
import Histories from '../../histories/screens/Histories';
import Settings from '../../settings/screens/Settings';
import OutletSetup from '../../setup/screens/OutletSetup';
import CreateOutletSetup from '../../setup/screens/CreateOutletSetup';
import OperatorSetup from '../../setup/screens/OperatorSetup';
import CreateOperatorSetup from '../../setup/screens/CreateOperatorSetup';

const OrdersTopTab = createMaterialTopTabNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: {
      tabBarLabel: 'Menu'
    }
  },
  Selected: {
    screen: Selected,
    navigationOptions: {
      tabBarLabel: 'Selected'
    }
  }
}, {
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: false,
    upperCaseLabel: true,
    activeTintColor: '#000',
    inactiveTintColor: '#666',
    labelStyle: {
      alignItems: 'center'
    },
    tabStyle: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    style: {
      backgroundColor: '#f7f7f7',
      height: 50,
      borderBottomColor: '#e5e5e6',
      borderBottomWidth: 0.5
    },
    indicatorStyle: {
      backgroundColor: '#666'
    }
  }
});

const OrdersStack = createStackNavigator({
  Orders: {
    screen: OrdersTopTab,
    navigationOptions: ({ navigation }) => ({
      title: 'Orders',
      headerPressColorAndroid: 'transparent',
      headerLeft: <IconMenu navigation={navigation} />,
      headerRight: [
        <IconSearch key="search" navigation={navigation} />,
        <IconSaved key="saved" navigation={navigation} />
      ],
      headerStyle: {
        borderBottomWidth: 0,
        elevation: 0
      }
    })
  }
});
const ordersIcon = ({ tintColor }) => <Icon name="dashboard" iconStyle={{ color: tintColor }} />;
ordersIcon.propTypes = { tintColor: PropTypes.shape.isRequired };
OrdersStack.navigationOptions = {
  drawerLabel: 'Orders',
  drawerIcon: ordersIcon
};

const HistoriesStack = createStackNavigator({
  Histories: {
    screen: Histories,
    navigationOptions: ({ navigation }) => ({
      title: 'Histories',
      headerPressColorAndroid: 'transparent',
      headerLeft: <IconMenu navigation={navigation} />,
      headerRight: [
        <IconSearch key="search" navigation={navigation} />,
        <IconSaved key="saved" navigation={navigation} />
      ]
    })
  }
});
const historiesIcon = ({ tintColor }) => <Icon name="history" iconStyle={{ color: tintColor }} />;
historiesIcon.propTypes = { tintColor: PropTypes.shape.isRequired };
HistoriesStack.navigationOptions = {
  drawerLabel: 'Historie',
  drawerIcon: historiesIcon
};

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerPressColorAndroid: 'transparent',
      headerLeft: <IconMenu navigation={navigation} />,
      headerRight: [
        <IconSearch key="search" navigation={navigation} />,
        <IconSaved key="saved" navigation={navigation} />
      ]
    })
  }
});
const settingsIcon = ({ tintColor }) => <Icon name="settings" iconStyle={{ color: tintColor }} />;
settingsIcon.propTypes = { tintColor: PropTypes.shape.isRequired };
SettingsStack.navigationOptions = {
  drawerLabel: 'Settings',
  drawerIcon: settingsIcon
};

const MainDrawer = createDrawerNavigator({
  OrdersStack,
  HistoriesStack,
  SettingsStack
}, {
  initialRouteName: 'OrdersStack',
  drawerWidth: 250,
  contentComponent: Drawer,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerBackgroundColor: '#ffffff',
  drawerToggleRoute: 'DrawerToggle',
  backBehavior: 'initialRoute',
  contentOptions: {
    inactiveTintColor: '#666',
    activeBackgroundColor: '#ffffff',
    activeTintColor: '#000000'
  }
});

const SetupStack = createStackNavigator({
  OutletSetup: {
    screen: OutletSetup,
    navigationOptions: {
      header: null
    }
  },
  CreateOutletSetup: {
    screen: CreateOutletSetup,
    navigationOptions: {
      title: 'Create New Outlet',
      headerTintColor: '#000'
    }
  },
  OperatorSetup: {
    screen: OperatorSetup,
    navigationOptions: {
      headerTransparent: true,
      headerTintColor: '#fff',
      headerStyle: {
        borderBottomWidth: 0,
        elevation: 0
      }
    }
  },
  CreateOperatorSetup: {
    screen: CreateOperatorSetup,
    navigationOptions: {
      title: 'Create New Operator',
      headerTintColor: '#000'
    }
  }
});

const AuthorizedStack = createStackNavigator({
  MainDrawer,
  SetupStack
}, {
  headerMode: 'none'
});

const UnauthorizedStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register'
    }
  }
}, {
  navigationOptions: {
    headerTintColor: '#000'
  }
});

// root
const RootNavigators = createSwitchNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  UnauthorizedStack,
  AuthorizedStack
});

export default RootNavigators;
