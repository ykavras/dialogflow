import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: theme.welcomeColor1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  top: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  center: {},
  bottom: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hero: {
    width: 120,
    height: 120,
    right: -10,
    resizeMode: 'contain',
  },
});
