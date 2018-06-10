import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const stylesMenu = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffefe'
  },
  itemGrid: {
    width: width / 3,
    height: width / 3,
    borderWidth: 0.5,
    borderColor: '#fffefe',
    backgroundColor: '#bebebe',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoProduct: {
    position: 'absolute',
    bottom: 5,
    left: 5
  },
  textAvatar: {
    color: '#ffffff',
    fontSize: 50
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fffefe'
  },
  textPrice: {
    fontSize: 16,
    color: '#fffefe'
  }
});

export default stylesMenu;
