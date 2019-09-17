import {StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000000',
    zIndex: 5,
    elevation: 5,
  },
  video: {
    position: 'relative',
    flex: 1,
  },
  close: {
    width: 100,
    height: 50,
    ...ifIphoneX(
      {marginTop: 40, marginBottom: 10},
      {
        marginVertical: 10,
      },
    ),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.welcomeColor2,
    borderRadius: 25,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
