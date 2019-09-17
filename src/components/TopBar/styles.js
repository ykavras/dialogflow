import {StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#F6F7F8',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    ...ifIphoneX(
      {
        height: 110,
        paddingTop: 30,
      },
      {
        height: 90,
      },
    ),
  },
  hero: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
