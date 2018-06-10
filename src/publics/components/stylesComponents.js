import { StyleSheet, Platform } from 'react-native';

const stylesComponents = StyleSheet.create({
  inputText: {
    color: '#000'
  },
  iconVisibility: {
    position: 'absolute',
    right: 20,
    top: -30
  },
  iconNavigator: {
    padding: Platform.OS === 'ios' ? 10 : 15
  },
  containerDrawer: {
    flex: 1
  },
  headerDrawer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerInfo: {
    marginLeft: 20
  },
  textUsername: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  containerHeaderDrawer: {
    height: 140,
    padding: 20,
    paddingTop: 30,
    justifyContent: 'space-around',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ceced0'
  },
  textOperator: {
    fontWeight: 'bold',
    color: '#666'
  },
  footerDrawer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0
  }
});

export default stylesComponents;
